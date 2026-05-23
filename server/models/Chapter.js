import mongoose from "mongoose";

const chapterSchema =new mongoose.Schema(
    {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    story: {
      type:String,
      
      required: true,
    },

    chapterNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Chapter = mongoose.model("Chapter", chapterSchema);

export default Chapter;

// "title": "high",
//   "content": "midium low high let me tell you about the time i was high as fluff",
//   "story": "6a0e143fc84212333cc9bd2a",
//   "chapterNumber": 3