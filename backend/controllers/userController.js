import userAccount from "../models/userModels.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

// _id(unique) comes from mongodb
const createToken = (_id) => {

    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'});

 
}



//get all user accounts
const getAllUsers = async(req, res) => {
    try {
        const users = await userAccount.find({}).sort({createdAt: -1})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


//create a user account or sign up
const createUser = async(req, res)=>{

    const {email, password, name} = req.body
    
    //add data into db
    // try {
    //     const user = await userAccount.create({email, password, name})
    //     res.status(200).json(user)
    // } catch (error) {
    //     res.status(400).json({error:error.message})
    // }

    try {
        const user = await userAccount.signup(email, password, name)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({email, token, name})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//login user

const loginUser = async(req, res) => {

    const {email, password} = req.body

    try {
        const user = await userAccount.login(email, password)

        //create a token

        const token = createToken(user._id)

        res.status(200).json({email, token})

    } catch (error) {
        res.status(400).json({error: error.message})
    }

    // res.json({message: 'login successfully'})
}


export {getAllUsers, createUser, loginUser}