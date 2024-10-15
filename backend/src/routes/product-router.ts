import { Router } from "express";
import {
  allProduct,
  createProduct,
  getProduct,
  likedProduct,
} from "../controllers/product-controller";

const router = Router();
router.get("/", allProduct);
router.get("/:productID", getProduct);
router.post("/createproduct", createProduct);
router.put("/likedproduct", likedProduct);

export default router;
