// routes/postsRoutes.ts
import express, { Router } from "express";
import { login } from "../controllers/auth/login";

const router: Router = express.Router();

router.post("/login", login);

export default router;
