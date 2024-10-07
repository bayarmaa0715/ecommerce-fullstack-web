import { Router } from "express";
import {
  allProduct,
  createProduct,
  getProduct,
} from "../controllers/product-controller";

const router = Router();
router.get("/", allProduct);
router.get("/:productID", getProduct);
router.post("/createproduct", createProduct);
export default router;
