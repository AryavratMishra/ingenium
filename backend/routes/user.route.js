import { Router } from "express";
import {
  login,
  logout,
  profile,
  refreshToken,
  requestPasswordReset,
  resetPassword,
  sendOtp,
  signup,
  verifyOtp,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/verifyJWT.middleware.js";

const userRouter = Router();

userRouter.route("/login").post(login);
userRouter.route("/signup").post(signup);
userRouter.route("/profile").get(verifyJWT, profile);
userRouter.post("/refresh", refreshToken);
userRouter.post("/logout", logout);
userRouter.route("/sendOtp").post(sendOtp);
userRouter.route("/verifyOtp").post(verifyOtp);
userRouter.route("/requestPasswordReset").post(requestPasswordReset);
userRouter.route("/resetPassword").post(resetPassword);

export default userRouter;
