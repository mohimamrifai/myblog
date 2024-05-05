// routes/postsRoutes.ts
import express, { Router } from "express";
import { getProfile } from "../controllers/user/getProfile";
import { isUserLoggedIn } from "../middleware/isUserLoggedIn";

const router: Router = express.Router();

router.get("/:id",isUserLoggedIn, getProfile);

export default router;
