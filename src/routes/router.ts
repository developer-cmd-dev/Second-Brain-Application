import express from "express";
import { UserModel } from "../db.js";
const router =express.Router()
import { signup,signIn} from "../controller/userController.js";
import authMiddleware from "../middleware/auth.middleware.js";
import {jwtMiddleware} from "../middleware/jwt.middleware.js";
import {addBrainData,getBrainData,deleteContent} from "../controller/BrainDataController.js";
import {createShareLink,verifyShareLink} from "../controller/ShareController.js";




router.post('/signIn',signIn)
router.post('/signup',authMiddleware,signup)
router.post('/add-content',jwtMiddleware,addBrainData)
router.get('/get-content',jwtMiddleware,getBrainData)
router.delete('/delete-content', jwtMiddleware,deleteContent)
router.post('/brain/share',jwtMiddleware, createShareLink)
router.get('/brain/:sharelink', verifyShareLink);


export default router;