import {Request,Response,NextFunction} from "express";
import {CustomError} from "../Exception/CustomError.js";

export const errorMiddleware=(err:Error,req:Request,res:Response,next:NextFunction)=>{
    if (err instanceof CustomError){
        if (err.errorData){
            res.status(err.statusCode).json({errorData:err.errorData});
        }else{
            res.status(err.statusCode).json({statusCode:err.statusCode,message:err.message,errorData:err.errorData});
        }
    }
}