import express from 'express';
import { createStory , getStories, getStory} from '../controllers/storyController.js';
import protect from "../middleware/authMiddleware.js"

const router = express.Router();

router.post('/', protect,createStory)
router.post('/', createStory);
router.get('/', getStories);
router.get('/:id', getStory);


export default router;