import pool from "../db.js";

export const registerTeam = async (req, res) => {
  const client = await pool.connect();

  try {
    const { teamName, psName, participants, email } = req.body;

    /* ---------- VALIDATION ---------- */
    if (!teamName || !psName || !participants || !email) {
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
      `INSERT INTO teams (team_name, ps_name, fees_paid, registered_by)
       VALUES ($1, $2, $3, $4)
       RETURNING id`,
      [teamName, psName, email.split("@")[1] == "iiti.ac.in", email],
    );

    const teamId = teamResult.rows[0].id;

    /* ---------- HANDLE PARTICIPANTS ---------- */
    for (const p of participants) {
      const existing = await client.query(
        `SELECT id FROM participants WHERE email = $1`,
        [p.email],
      );

      let participantId;

      if (existing.rowCount > 0) {
        participantId = existing.rows[0].id;
      } else {
        const newParticipant = await client.query(
          `INSERT INTO participants 
          (first_name, last_name, gender, email, mobile, aadhaar, city, state, college)
          VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
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

      await client.query(
        `INSERT INTO team_members (team_id, participant_id)
         VALUES ($1, $2)`,
        [teamId, participantId],
      );
    }

    await client.query("COMMIT");

    res.status(201).json({
      message: "Registration submitted (pending payment)",
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

    res.status(500).json({ message: "Internal server error" });
  } finally {
    client.release();
  }
};

export const confirmPayment = async (req, res) => {
  try {
    const { teamId, paymentId } = req.body;

    if (!teamId || !paymentId) {
      return res.status(400).json({
        message: "teamId and paymentId required",
      });
    }

    const result = await pool.query(
      `UPDATE teams
       SET fees_paid = TRUE,
           payment_id = $1,
           paid_at = NOW()
       WHERE id = $2
       RETURNING *`,
      [paymentId, teamId],
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Team not found" });
    }

    res.status(200).json({
      message: "Payment confirmed",
      team: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    if (error.code === "23505") {
      return res.status(400).json({
        message: "Payment already recorded",
      });
    }

    res.status(500).json({ message: "Internal server error" });
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
      SELECT t.id, t.team_name, t.ps_name, t.fees_paid
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
        fees_paid: team.fees_paid,
        participants: participantsResult.rows,
      });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
