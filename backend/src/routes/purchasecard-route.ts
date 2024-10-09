import { Router } from "express";
import { createdCard, getCard } from "../controllers/purchasecard-controller";

const router = Router();
router.post("/createdcard", createdCard);
router.get("/", getCard);
export default router;
