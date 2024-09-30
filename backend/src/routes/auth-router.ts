import { Router } from "express";
import {
  currentUser,
  forgetPassword,
  login,
  signup,
  verifyOtp,
  verifyPassword,
} from "../controllers/auth-controller";
import { auth } from "../middlewares/auth";
const router = Router();

router.route("/currentUser").get(auth, currentUser);
router.route("/verify-password").post(verifyPassword);
router.route("/forget-password").post(forgetPassword);
router.route("/verify-otp").post(verifyOtp);
router.route("/login").post(login);
router.route("/signup").post(signup);

export default router;
