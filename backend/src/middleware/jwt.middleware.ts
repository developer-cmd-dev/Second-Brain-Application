import {Request,Response,NextFunction} from "express";
import {CustomError} from "../Exception/CustomError.js";
import {jwtService} from "../services/JWTService.js";
import UserModel from "../models/UserModel.js";
import {JwtPayload} from "jsonwebtoken";
import {Error} from "mongoose";

export const jwtMiddleware = async (req:Request,res:Response,next:NextFunction)=>{
    const token = req.headers.authorization;
    if (!token?.startsWith("Bearer ") || token =="")throw new CustomError("Invalid token",400);
    const extractToken = token?.split(" ")[1];
    let isVerified:string|JwtPayload;

  try {
      isVerified=jwtService.verifyToken(extractToken??"");
  }catch (err){
      throw new CustomError((err as Error).message,502);
  }
  if (typeof isVerified !== "string"){
      const userDataFromDb =await UserModel.findOne({email:isVerified?.data});
      if (!userDataFromDb)throw new CustomError("User not found",404);
      res.locals.userDataFromDb = userDataFromDb;
  }else{
      throw new CustomError("Invalid Payload",404);
  }

   next();
}

