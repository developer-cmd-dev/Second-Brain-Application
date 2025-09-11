import express from "express";
import { UserModel } from "../db.js";
const router =express.Router()
import { signup,signIn} from "../controller/userController.js";
import authMiddleware from "../middleware/auth.middleware.js";
import {jwtMiddleware} from "../middleware/jwt.middleware.js";
import {addBrainData} from "../controller/BrainDataController.js";





router.post('/signIn',signIn)
router.post('/signup',authMiddleware,signup)
router.post('/add-content',jwtMiddleware,addBrainData)
router.use(jwtMiddleware).get('/get-content', (req, res) => { })
router.delete('/delete-content', (req, res) => { })
router.post('/brain/share', (req, res) => { })
router.get('/brain/:sharelink', (req, res) => { });


export default router;