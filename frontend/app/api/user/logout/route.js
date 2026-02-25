import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("refresh_token")?.value;

    if (token) {
      await pool.query("DELETE FROM refresh_tokens WHERE token = ?", [token]);
    }

    const response = NextResponse.json(
      { message: "Logged out" },
      { status: 200 },
    );

    response.cookies.delete("refresh_token");

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
