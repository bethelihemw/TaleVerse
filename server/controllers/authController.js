import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) =>{
    try{
        const {username, email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "user already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user =await User.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json({message: "User registered successfully", user});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const loginUser = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "invalid credentials"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "invalid credentials"})
        }

        const token = jwt.sign({id: user._id},process.env.JWT_SECRET, {expiresIn: "7d"});
        res.status(200).json({message: "Login Successfull", token, user});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const getUsers = async (req, res)=>{
    try{
        const users = await User.find();
        res.json(users);
   }catch(error){
    res.status(500).json({message: error.message});
   }
}