import { Router } from "express";
import {
  createdCard,
  deleteCard,
  getCard,
  updateData,
} from "../controllers/purchasecard-controller";

const router = Router();
router.post("/createdcard", createdCard);
router.get("/getCart", getCard);
router.delete("/deletecart", deleteCard);
router.put("/updatedcart", updateData);

export default router;
