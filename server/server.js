import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import storyRoutes from './routes/storyRoutes.js';
import authRoutes from './routes/authRoutes.js';
import chapterRoutes from './routes/chapterRoutes.js'



dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/users", authRoutes);
app.use("/api/chapters", chapterRoutes);
app.use("/api/stories", storyRoutes);

app.get("/", (req,res) => {
    res.send("now you see me")
});

const PORT = process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})