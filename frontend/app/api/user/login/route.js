import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import pool from "@/lib/db";
import { signAccessToken, signRefreshToken } from "@/lib/token";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 },
      );
    }

    const [rows] = await pool.query(
      "SELECT id, name, email, password_hash FROM users WHERE email = ?",
      [email],
    );

    if (rows.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    const user = rows[0];

    const isValid = await bcrypt.compare(password, user.password_hash);

    if (!isValid) {
      return NextResponse.json(
        { message: "Incorrect password" },
        { status: 400 },
      );
    }

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user.id);

    await pool.query("DELETE FROM refresh_tokens WHERE user_id = ?", [user.id]);

    await pool.query(
      `INSERT INTO refresh_tokens (user_id, token, expires_at)
       VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 7 DAY))`,
      [user.id, refreshToken],
    );

    const response = NextResponse.json(
      { access_token: accessToken },
      { status: 200 },
    );

    response.cookies.set("refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error(error);

    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { message: "Duplicate token detected" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Internal Server error" },
      { status: 500 },
    );
  }
}
