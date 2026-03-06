import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request) {
  const connection = await pool.getConnection();

  try {
    const { teamName, psName, participants, email } = await request.json();

    if (!teamName || !psName || !participants || !email) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 },
      );
    }

    if (!Array.isArray(participants)) {
      return NextResponse.json(
        { message: "Participants must be an array" },
        { status: 400 },
      );
    }

    if (participants.length < 1) {
      return NextResponse.json(
        { message: "Team must have at least 1 participant" },
        { status: 400 },
      );
    }

    for (const p of participants) {
      if (
        !p.first_name ||
        !p.last_name ||
        !p.email ||
        !p.mobile ||
        !p.city ||
        !p.state ||
        !p.gender ||
        !p.aadhaar
      ) {
        return NextResponse.json(
          { message: "Each participant must have all details" },
          { status: 400 },
        );
      }
    }

    await connection.beginTransaction();

    const [teamExists] = await connection.query(
      `SELECT id FROM teams WHERE team_name = ?`,
      [teamName],
    );

    if (teamExists.length > 0) {
      await connection.rollback();
      return NextResponse.json(
        { message: "A team with this name already exists" },
        { status: 400 },
      );
    }

    const [teamResult] = await connection.query(
      `INSERT INTO teams (team_name, ps_name, fees_paid, registered_by)
       VALUES (?, ?, ?, ?)`,
      [teamName, psName, email.split("@")[1] === "iiti.ac.in", email],
    );

    const teamId = teamResult.insertId;

    for (const p of participants) {
      const [existing] = await connection.query(
        `SELECT id FROM participants WHERE email = ?`,
        [p.email],
      );

      let participantId;

      if (existing.length > 0) {
        participantId = existing[0].id;
      } else {
        const [newParticipant] = await connection.query(
          `INSERT INTO participants
          (first_name, last_name, gender, email, mobile, aadhaar, city, state, college)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            p.first_name,
            p.last_name,
            p.gender,
            p.email,
            p.mobile,
            p.aadhaar,
            p.city,
            p.state,
            p.college,
          ],
        );

        participantId = newParticipant.insertId;
      }

      await connection.query(
        `INSERT INTO team_members (team_id, participant_id)
         VALUES (?, ?)`,
        [teamId, participantId],
      );
    }

    await connection.commit();

    return NextResponse.json(
      {
        message: "Registration submitted (pending payment)",
        teamId,
      },
      { status: 201 },
    );
  } catch (error) {
    await connection.rollback();
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { message: "Duplicate registration detected" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  } finally {
    connection.release();
  }
}
