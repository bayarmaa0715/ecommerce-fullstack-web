import { Router } from "express";
import { currentUser, login, signup } from "../controllers/auth-controller";
import { auth } from "../middlewares/auth";
const router = Router();

router.route("/currentUser").get(auth, currentUser);

router.route("/login").post(login);
router.route("/signup").post(signup);

export default router;
