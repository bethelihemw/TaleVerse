import Story from '../models/Story.js';


//  create a new story

export const createStory = async(req,res)=>{
    try{
        const story = await Story.create
        ({...req.body, author: req.user.username});
        res.status(201).json(story);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}
// get all stories

export const getStories = async(req,res)=>{
    try{
        const stories = await Story.find();
        res.status(200).json(stories)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

// get a single story

export const getStory = async(req,res)=>{
    try{
        const story = await Story.findById(req.params.id);
        res.status(200).json(story)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}





