import {Request,Response,NextFunction} from "express";
import {CustomError} from "../Exception/CustomError.js";
import {jwtService} from "../services/JWTService.js";
import UserModel from "../models/UserModel.js";

export const jwtMiddleware = async (req:Request,res:Response,next:NextFunction)=>{
    const token = req.headers.authorization;
    if (!token?.startsWith("Bearer ") || token =="")throw new CustomError("Invalid token",400);
    const extractToken = token?.split(" ")[1];
    // @ts-ignore
   const {data}=jwtService.verifyToken(extractToken);
   const userDataFromDb =await UserModel.findOne({email:data});
   if (!userDataFromDb)throw new CustomError("User not found",404);
    next();
}

