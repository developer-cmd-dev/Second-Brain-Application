
import {Request,Response,NextFunction} from 'express';
import {UserZodModel} from "../validation/ZodValidation.js";
import * as z from 'zod';
import {CustomError} from "../Exception/CustomError.js";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import {jwtService} from "../services/JWTService.js";

const authMiddleware = async (req:Request,res:Response,next:NextFunction)=>{
    const ParsedUserData = z.safeParse(UserZodModel,req.body);
    if (!ParsedUserData.success) throw new CustomError("Validation Error",400,ParsedUserData.error)

    const {email,password}=ParsedUserData.data;

    const dbResponse=await UserModel.findOne({email:email});
    if (!dbResponse) throw new CustomError("User not found",404);

    // @ts-ignore
    const checkPassword = bcrypt.compare(password, dbResponse.password);
    if (!checkPassword) throw new CustomError("Bad Credential",401);
    const token = jwtService.generateToken(email);
    res.set('authorization', token);
    res.status(200).json({message:"Login Success"})
    next();
}

export default authMiddleware;