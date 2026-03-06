import pool from "@/lib/db";
import { otpMap } from "@/lib/otp-store";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 },
      );
    }

    const [existingUsers] = await pool.query(
      "SELECT id FROM users WHERE email = ?",
      [email],
    );

    if (existingUsers.length > 0) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 400 },
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 5 * 60 * 1000;

    otpMap.set(email, { otp, expiresAt });

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
      subject: "Email Verification OTP",
      text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    });

    return NextResponse.json({ message: "OTP sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server error" },
      { status: 500 },
    );
  }
}
