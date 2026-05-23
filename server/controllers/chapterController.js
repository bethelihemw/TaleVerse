import Chapter from "../models/Chapter.js";


// CREATE CHAPTER
export const createChapter = async (req, res) => {
  try {
    const chapter = await Chapter.create(req.body);

    res.status(201).json(chapter);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET STORY CHAPTERS
export const getStoryChapters = async (req, res) => {
  try {
    const chapters = await Chapter.find({
      story: req.params.storyId,
    }).sort({ chapterNumber: 1 });

    res.json(chapters);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET SINGLE CHAPTER
export const getChapter = async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.id);

    res.json(chapter);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};