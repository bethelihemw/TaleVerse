import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description: String,
    coverImage: String,
    author:{
        type:String,
        required:true,
    },
    genre: String,
},{timestamps: true});

const Story = mongoose.model("Story", storySchema);

export default Story;