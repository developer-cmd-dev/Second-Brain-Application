import { Http2ServerRequest } from "http2";
import { Request,Response } from "express";
import * as z from 'zod'
import {UserZodModel} from "../validation/ZodValidation.js";
import {CustomError} from "../Exception/CustomError.js";
import UserModel from "../models/UserModel.js";


const signup = async(req:Request,res:Response)=>{
res.set(200).json({message:"all good"});
}

const signIn = async(req:Request,res:Response)=>{
const parsedUserData = z.safeParse(UserZodModel,req.body);
if (!parsedUserData.success){
    const zodError = z.treeifyError(parsedUserData.error)
    throw new CustomError("Validation Error",400,zodError);
}

const {email, password} = parsedUserData.data;

const dbResponse= await UserModel.create({
    email,
    password
})
    if (!dbResponse)throw new CustomError("Internal Server Error",500);

    res.status(200).json({message:"success"});
}




export {signup,signIn}