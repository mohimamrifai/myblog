// routes/postsRoutes.ts
import express, { Router } from "express";
import { allCategories } from "../controllers/category/allCategories";
import { createCategory } from "../controllers/category/createCategory";
import { categoryById } from "../controllers/category/categoryById";

const router: Router = express.Router();

router.get("/", allCategories);
router.get("/:id", categoryById);
router.post("/", createCategory);

export default router;
