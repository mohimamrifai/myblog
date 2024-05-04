// routes/postsRoutes.ts
import express, { Router } from "express";
import { allCategories } from "../controllers/category/allCategories";
import { CreateCategory } from "../controllers/category/createCategory";

const router: Router = express.Router();

router.get("/", allCategories);
router.post("/", CreateCategory);

export default router;
