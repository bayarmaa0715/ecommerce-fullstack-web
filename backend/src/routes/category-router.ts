import { Router } from "express";
import {
  CreateCategory,
  getCategory,
} from "../controllers/category-controller";

const router = Router();
router.route("/category").post(CreateCategory);
router.route("/allcategory").get(getCategory);
export default router;
