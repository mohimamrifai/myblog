// routes/postsRoutes.ts
import express, { Router } from "express";
import { allCategories } from "../controllers/category/allCategories";

const router: Router = express.Router();

router.get("/", allCategories);

export default router;
