// routes/postsRoutes.ts
import express, { Router } from "express";
import { allCategories } from "../controllers/category/allCategories";
import { createCategory } from "../controllers/category/createCategory";
import { categoryById } from "../controllers/category/categoryById";
import { deleteCategory } from "../controllers/category/deleteCategory";

const router: Router = express.Router();

router.get("/", allCategories);
router.get("/:id", categoryById);
router.post("/", createCategory);
router.delete("/:id", deleteCategory);

export default router;
