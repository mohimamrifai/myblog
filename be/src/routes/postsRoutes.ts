// routes/postsRoutes.ts

import express, { Router } from "express";
import multer from "multer";
import { allPost } from "../controllers/post/getAllPost";
import { createPost } from "../controllers/post/createPost";
import { postById } from "../controllers/post/postById";

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "src/assets/thumbnail");
  },
  filename(req, file, callback) {
    const fileName = Date.now() + "_" + file.originalname;
    callback(null, fileName);
  },
});

const router: Router = express.Router();
const upload = multer({ storage: storage });

router.get("/", allPost);
router.get("/:id", postById);
router.post("/", upload.single("thumbnail"), createPost);

export default router;
