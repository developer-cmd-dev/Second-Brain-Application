import express from "express";
import { UserModel } from "../db.js";
const router =express.Router()
import { signup } from "../controller/usercontroller.js";


router.post('/api/v1/signup',signup)

router.get('api/v1/signup', async (req, res) => {

})




router.post('api/v1/content', (req, res) => { })
router.get('api/v1/content', (req, res) => { })
router.delete('api/v1/content', (req, res) => { })
router.post('api/v1/brain/share', (req, res) => { })
router.get('api/v1/brain/:sharelink', (req, res) => { });


export default router;