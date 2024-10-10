import { Router } from "express";
import {
  createdCard,
  deleteCard,
  getCard,
} from "../controllers/purchasecard-controller";

const router = Router();
router.post("/createdcard", createdCard);
router.get("/", getCard);
router.delete("/deletecart", deleteCard);
export default router;
