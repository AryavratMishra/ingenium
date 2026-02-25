import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(request) {
  try {
    const email = request.nextUrl.searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 },
      );
    }

    const [teams] = await pool.query(
      `
      SELECT DISTINCT t.id, t.team_name, t.ps_name, t.fees_paid
      FROM teams t
      JOIN team_members tm ON tm.team_id = t.id
      JOIN participants p ON p.id = tm.participant_id
      WHERE p.email = ?
      `,
      [email],
    );

    if (teams.length === 0) {
      return NextResponse.json(
        { message: "Participant not found in any team" },
        { status: 404 },
      );
    }

    const response = [];

    for (const team of teams) {
      const [participants] = await pool.query(
        `
        SELECT p.first_name, p.last_name, p.gender,
               p.email, p.mobile, p.aadhaar,
               p.city, p.state, p.college
        FROM participants p
        JOIN team_members tm ON tm.participant_id = p.id
        WHERE tm.team_id = ?
        ORDER BY p.id
        `,
        [team.id],
      );

      response.push({
        team_name: team.team_name,
        ps_name: team.ps_name,
        fees_paid: team.fees_paid,
        participants: participants,
      });
    }

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
