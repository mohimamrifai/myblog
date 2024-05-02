// routes/postsRoutes.ts
import express, { Router } from "express";
import multer from "multer";
import { login } from "../controllers/auth/login";
import { register } from "../controllers/auth/register";

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "src/assets/avatar");
  },
  filename(req, file, callback) {
    const fileName = req.body.email + "_" + file.originalname;
    callback(null, fileName);
  },
});

const router: Router = express.Router();
const upload = multer({ storage: storage });

router.post("/login", login);
router.post("/register", upload.single('avatar'), register);

export default router;
