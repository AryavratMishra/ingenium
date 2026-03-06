import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { resetTokenMap } from "@/lib/reset-token-store";
import pool from "@/lib/db";

export async function POST(request) {
  try {
    const { token, newPassword } = await request.json();

    if (!token || !newPassword) {
      return NextResponse.json(
        { message: "Token and new password required" },
        { status: 400 },
      );
    }

    const record = resetTokenMap.get(token);

    if (!record || Date.now() > record.expiresAt) {
      return NextResponse.json(
        { message: "Token invalid or expired" },
        { status: 400 },
      );
    }

    const [users] = await pool.query("SELECT id FROM users WHERE id = ?", [
      record.userId,
    ]);

    if (users.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const user = users[0];

    const hashed = await bcrypt.hash(newPassword, 10);

    await pool.query("UPDATE users SET password_hash = ? WHERE id = ?", [
      hashed,
      user.id,
    ]);

    resetTokenMap.delete(token);

    return NextResponse.json(
      { message: "Password updated successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
