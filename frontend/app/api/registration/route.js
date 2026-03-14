import { NextResponse } from "next/server";
import pool from "@/lib/db";
import jwt from "jsonwebtoken";

export async function GET(request) {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    let decoded;

    try {
      decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (err) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    console.log(decoded);
    const email = decoded.email;

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
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
