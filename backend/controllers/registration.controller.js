import pool from "../db.js";

export const registerTeam = async (req, res) => {
  const client = await pool.connect();

  try {
    const { teamName, psName, participants } = req.body;

    /* ---------- VALIDATION ---------- */
    if (!teamName || !psName || !participants) {
      return res.status(400).json({ message: "All fields required" });
    }

    if (!Array.isArray(participants)) {
      return res.status(400).json({ message: "Participants must be an array" });
    }

    if (participants.length < 1) {
      return res
        .status(400)
        .json({ message: "Team must have atleast 1 participant" });
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
        return res.status(400).json({
          message: "Each participant must have all details",
        });
      }
    }

    /* ---------- TRANSACTION START ---------- */
    await client.query("BEGIN");

    /* ---------- TEAM NAME CHECK ---------- */
    const teamExists = await client.query(
      `SELECT id FROM teams WHERE team_name = $1`,
      [teamName],
    );

    if (teamExists.rowCount > 0) {
      await client.query("ROLLBACK");
      return res.status(400).json({
        message: "A team with this name already exists",
      });
    }

    /* ---------- CREATE TEAM ---------- */
    const teamResult = await client.query(
      `INSERT INTO teams (team_name, ps_name)
       VALUES ($1, $2)
       RETURNING id`,
      [teamName, psName],
    );

    const teamId = teamResult.rows[0].id;

    /* ---------- HANDLE PARTICIPANTS ---------- */
    for (const p of participants) {
      // 1️⃣ Check if participant already exists
      const existingParticipant = await client.query(
        `SELECT id FROM participants WHERE email = $1`,
        [p.email],
      );

      let participantId;

      if (existingParticipant.rowCount > 0) {
        participantId = existingParticipant.rows[0].id;
      } else {
        // 2️⃣ Create participant
        const newParticipant = await client.query(
          `INSERT INTO participants (first_name, last_name, gender, email, mobile, aadhaar, city, state, college)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
           RETURNING id`,
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
        participantId = newParticipant.rows[0].id;
      }

      // 3️⃣ Link participant to team
      await client.query(
        `INSERT INTO team_members (team_id, participant_id)
         VALUES ($1, $2)`,
        [teamId, participantId],
      );
    }

    /* ---------- COMMIT ---------- */
    await client.query("COMMIT");

    res.status(201).json({
      message: "Registration successful",
      teamId,
    });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error(error);

    if (error.code === "23505") {
      return res.status(400).json({
        message: "Duplicate registration detected",
      });
    }

    if (error.message.includes("maximum of 6 participants")) {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: "Internal server error" });
  } finally {
    client.release();
  }
};

export const getTeamByParticipantEmail = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    /* ---------- FIND TEAM ---------- */
    const teamResult = await pool.query(
      `
      SELECT t.id, t.team_name, t.ps_name
      FROM teams t
      JOIN team_members tm ON tm.team_id = t.id
      JOIN participants p ON p.id = tm.participant_id
      WHERE p.email = $1
      `,
      [email],
    );

    if (teamResult.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "Participant not found in any team" });
    }

    let response = [];

    /* ---------- GET ALL PARTICIPANTS OF TEAM ---------- */
    for (const team of teamResult.rows) {
      const participantsResult = await pool.query(
        `
      SELECT p.first_name, p.last_name, p.gender, p.email, p.mobile, p.aadhaar, p.city, p.state, p.college
      FROM participants p
      JOIN team_members tm ON tm.participant_id = p.id
      WHERE tm.team_id = $1
      ORDER BY p.id
      `,
        [team.id],
      );
      response.push({
        team_name: team.team_name,
        ps_name: team.ps_name,
        participants: participantsResult.rows,
      });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
