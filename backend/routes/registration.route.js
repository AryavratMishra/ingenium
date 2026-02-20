import { Router } from "express";
import {
  confirmPayment,
  getTeamByParticipantEmail,
  registerTeam,
} from "../controllers/registration.controller.js";
import { verifyJWT } from "../middlewares/verifyJWT.middleware.js";

const registrationRouter = Router();

registrationRouter.post("/register", verifyJWT, registerTeam);
registrationRouter.post("/confirm", confirmPayment);
registrationRouter.get("/", verifyJWT, getTeamByParticipantEmail);

export default registrationRouter;