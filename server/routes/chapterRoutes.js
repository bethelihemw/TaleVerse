import express from "express";

import {
  createChapter,
  getStoryChapters,
  getChapter,
} from "../controllers/chapterController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createChapter);

router.get("/story/:storyId", getStoryChapters);

router.get("/:id", getChapter);

export default router;