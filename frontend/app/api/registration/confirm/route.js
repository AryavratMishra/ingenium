import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request) {
  try {
    const { teamId, paymentId } = await request.json();

    if (!teamId || !paymentId) {
      return NextResponse.json(
        { message: "teamId and paymentId required" },
        { status: 400 },
      );
    }

    const [updateResult] = await pool.query(
      `UPDATE teams
       SET fees_paid = TRUE,
           payment_id = ?,
           paid_at = NOW()
       WHERE id = ?`,
      [paymentId, teamId],
    );

    if (updateResult.affectedRows === 0) {
      return NextResponse.json({ message: "Team not found" }, { status: 404 });
    }

    const [rows] = await pool.query(`SELECT * FROM teams WHERE id = ?`, [
      teamId,
    ]);

    return NextResponse.json(
      {
        message: "Payment confirmed",
        team: rows[0],
      },
      { status: 200 },
    );
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { message: "Payment already recorded" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
