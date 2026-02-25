import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import pool from "@/lib/db";
import { signAccessToken, signRefreshToken } from "@/lib/token";

export async function POST(request) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 },
      );
    }

    const [existingUsers] = await pool.query(
      "SELECT id FROM users WHERE email = ?",
      [email],
    );

    if (existingUsers.length > 0) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 },
      );
    }

    const hashed = await bcrypt.hash(password, 10);

    const [insertResult] = await pool.query(
      `INSERT INTO users (name, email, password_hash)
       VALUES (?, ?, ?)`,
      [name, email, hashed],
    );

    const userId = insertResult.insertId;

    const [users] = await pool.query(
      "SELECT id, name, email FROM users WHERE id = ?",
      [userId],
    );

    const user = users[0];

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user.id);

    await pool.query(
      `INSERT INTO refresh_tokens (user_id, token, expires_at)
       VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 7 DAY))`,
      [user.id, refreshToken],
    );

    const response = NextResponse.json(
      { access_token: accessToken },
      { status: 201 },
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
        { message: "User already exists" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Internal Server error" },
      { status: 500 },
    );
  }
}
