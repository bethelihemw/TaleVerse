import express from 'express';
import { createStory , getStories, getStory} from '../controllers/storyController.js';


const router = express.Router();

router.post('/', createStory);
router.get('/', getStories);
router.get('/:id', getStory);

export default router;