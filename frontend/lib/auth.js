import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function verifyJWT() {
  const cookieStore = await cookies();
  const token = cookieStore.get("refresh_token")?.value;

  if (!token) throw new Error("Unauthorized");

  const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

  return decoded;
}
