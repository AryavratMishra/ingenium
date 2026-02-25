import pool from "@/lib/db";
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { resetTokenMap } from "@/lib/reset-token-store";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 },
      );
    }

    const [users] = await pool.query(
      "SELECT id, name, email, created_at FROM users WHERE email = ?",
      [email],
    );

    if (users.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const user = users[0];

    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = Date.now() + 15 * 60 * 1000;

    resetTokenMap.set(token, {
      userId: user.id,
      expiresAt,
    });

    const resetLink = `${process.env.FRONTEND_URL}/auth/reset_password?token=${token}`;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Ingenium" <${process.env.EMAIL}>`,
      to: email,
      subject: "Reset your password",
      text:
        `Click this link to reset your password: ${resetLink}\n\n` +
        `The link expires in 15 minutes.`,
    });

    return NextResponse.json({ message: "Reset link sent" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server error" },
      { status: 500 },
    );
  }
}
