import { NextResponse } from "next/server";
import pool from "@/lib/db";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { signAccessToken, signRefreshToken } from "@/lib/token";

export async function POST() {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("refresh_token")?.value;

    if (!refreshToken) {
      return NextResponse.json({ message: "Logout" }, { status: 401 });
    }

    let decoded;
    try {
      decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    } catch (err) {
      return NextResponse.json({ message: "Logout" }, { status: 401 });
    }

    const [storedTokens] = await pool.query(
      "SELECT * FROM refresh_tokens WHERE token = ?",
      [refreshToken],
    );

    if (storedTokens.length === 0) {
      return NextResponse.json(
        { message: "Token reuse detected" },
        { status: 401 },
      );
    }

    const userId = decoded.id;

    await pool.query("DELETE FROM refresh_tokens WHERE token = ?", [
      refreshToken,
    ]);

    const [users] = await pool.query(
      "SELECT id, name, email FROM users WHERE id = ?",
      [userId],
    );

    if (users.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    const user = users[0];

    const newAccessToken = signAccessToken(user);
    const newRefreshToken = signRefreshToken(user.id);

    await pool.query(
      `INSERT INTO refresh_tokens (user_id, token, expires_at)
       VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 7 DAY))`,
      [user.id, newRefreshToken],
    );

    const response = NextResponse.json(
      { access_token: newAccessToken },
      { status: 200 },
    );

    response.cookies.set("refresh_token", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
