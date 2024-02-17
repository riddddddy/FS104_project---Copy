import express from "express";
import { getAllUsers, createUser, loginUser } from "../controllers/userController.js";
import userAccount from "../models/userModels.js";

const router = express.Router()

//GET all users
router.get('/', getAllUsers)
// router.get('/', (req, res) => {
//     res.json({ message: "Get all users" })
// })

//Post a new user
router.post('/register',createUser)

//Login the user

router.post('/', loginUser)


export default router