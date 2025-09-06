import { Http2ServerRequest } from "http2";
import { UserModel } from "../db.js"
import { Request,Response } from "express";

const signup = async(req:Request,res:Response)=>{
res.set(200).json({message:"all good"});
}


export {signup}