import pool from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import crypto from "crypto";
import { signAccessToken, signRefreshToken } from "../utils/token.js";
import { refreshCookieOptions } from "../utils/cookies.js";

export const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refresh_token;

  if (!refreshToken) {
    return res.status(401).json({ message: "Logout" });
  }

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Logout" });
      }

      const { rows } = await pool.query(
        "SELECT * FROM refresh_tokens WHERE token = $1",
        [refreshToken],
      );

      if (rows.length === 0) {
        return res.status(401).json({ message: "Token reuse detected" });
      }

      const userId = decoded.id;

      await pool.query("DELETE FROM refresh_tokens WHERE token = $1", [
        refreshToken,
      ]);

      const userRes = await pool.query(
        "SELECT id, name, email FROM users WHERE id = $1",
        [userId],
      );

      if (userRes.rows.length === 0) {
        return res.status(401).json({ message: "User not found" });
      }

      const user = userRes.rows[0];

      const newAccessToken = signAccessToken(user);
      const newRefreshToken = signRefreshToken(user.id);

      await pool.query(
        `INSERT INTO refresh_tokens (user_id, token, expires_at)
         VALUES ($1, $2, NOW() + INTERVAL '7 days')`,
        [user.id, newRefreshToken],
      );

      res.cookie("refresh_token", newRefreshToken, refreshCookieOptions);

      return res.status(200).json({
        access_token: newAccessToken,
      });
    },
  );
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const { rows } = await pool.query(
      "SELECT id, name, email, password_hash FROM users WHERE email = $1",
      [email],
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = rows[0];

    const check = await bcrypt.compare(password, user.password_hash);
    if (!check) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user.id);

    await pool.query(
      `INSERT INTO refresh_tokens (user_id, token, expires_at)
     VALUES ($1, $2, NOW() + INTERVAL '7 days')`,
      [user.id, refreshToken],
    );

    res.cookie("refresh_token", refreshToken, refreshCookieOptions);

    res.status(200).json({
      access_token: accessToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const send_otp = async (req, res) => {};

export const signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existing = await pool.query("SELECT id FROM users WHERE email = $1", [
      email,
    ]);

    if (existing.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const { rows } = await pool.query(
      `INSERT INTO users (name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, name, email`,
      [name, email, hashed],
    );

    const user = rows[0];

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user.id);

    res.cookie("refresh_token", refreshToken, refreshCookieOptions);

    res.status(200).json({
      access_token: accessToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const profile = async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT id, name, email, created_at FROM users WHERE id = $1",
      [req.user.id],
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const logout = async (req, res) => {
  const refreshToken = req.cookies.refresh_token;

  if (refreshToken) {
    await pool.query("DELETE FROM refresh_tokens WHERE token = $1", [
      refreshToken,
    ]);
  }

  res.clearCookie("refresh_token", refreshCookieOptions);

  res.status(200).json({ message: "Logged out" });
};

const otpMap = new Map();

export const sendOtp = async (req, res) => {
  const { email } = req.body;

  const existingUser = await pool.query(
    "SELECT id, name, email, created_at FROM users WHERE email = $1",
    [email],
  );
  if (existingUser.rows.length > 0) {
    return res.status(400).json({ message: "Email already in use" });
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

  res.json({ message: "OTP sent" });
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  const record = otpMap.get(email);

  if (!record || Date.now() > record.expiresAt) {
    return res.status(400).json({ message: "OTP expired or not found" });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  otpMap.delete(email);
  res.json({ message: "Email verified" });
};

const resetTokenMap = new Map();

export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  const user = await pool.query(
    "SELECT id, name, email, created_at FROM users WHERE email = $1",
    [email],
  );

  console.log(email);
  console.log(user);

  if (user.rows.length == 0)
    return res.status(404).json({ message: "User not found" });

  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = Date.now() + 15 * 60 * 1000;

  resetTokenMap.set(token, { userId: user.rows[0].id, expiresAt });

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
    text: `Click this link to reset your password: ${resetLink}\n\nThe link expires in 15 minutes.`,
  });

  res.json({ message: "Reset link sent" });
};

export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const record = resetTokenMap.get(token);
    if (!record || Date.now() > record.expiresAt) {
      return res.status(400).json({ message: "Token invalid or expired" });
    }

    const user = await pool.query(
      "SELECT id, name, email, created_at FROM users WHERE id = $1",
      [record.userId],
    );
    if (user.rows.length == 0)
      return res.status(404).json({ message: "User not found" });

    const hashed = await bcrypt.hash(newPassword, 10);

    await pool.query("UPDATE users SET password_hash = $2 WHERE id = $1", [
      user.rows[0].id,
      hashed,
    ]);

    resetTokenMap.delete(token);

    res.status(200).json({
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
