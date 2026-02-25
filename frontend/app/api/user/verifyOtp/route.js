import { otpMap } from "@/lib/otp-store";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { message: "Email and OTP required" },
        { status: 400 },
      );
    }

    const record = otpMap.get(email);

    if (!record || Date.now() > record.expiresAt) {
      return NextResponse.json(
        { message: "OTP expired or not found" },
        { status: 400 },
      );
    }

    if (record.otp !== otp) {
      return NextResponse.json({ message: "Invalid OTP" }, { status: 400 });
    }

    otpMap.delete(email);

    return NextResponse.json({ message: "Email verified" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server error" },
      { status: 500 },
    );
  }
}
