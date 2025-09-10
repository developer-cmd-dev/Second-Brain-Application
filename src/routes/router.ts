import express from "express";
import { UserModel } from "../db.js";
const router =express.Router()
import { signup,signIn} from "../controller/userController.js";
import authMiddleware from "../middleware/auth.middleware.js";
import {jwtMiddleware} from "../middleware/jwt.middleware.js";


router.post('/api/v1/signup',signup)

router.get('api/v1/signup', async (req, res) => {

})



router.post('/signin',signIn)
router.use(authMiddleware).post('/signup',signup)
router.post('/content', (req, res) => { })
router.get('/content', (req, res) => { })
router.delete('/content', (req, res) => { })
router.post('/brain/share', (req, res) => { })
router.get('/brain/:sharelink', (req, res) => { });


export default router;