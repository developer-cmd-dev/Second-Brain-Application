import {Request,Response,NextFunction} from "express";

const jwtMiddleware = async (req:Request,res:Response,next:NextFunction)=>{

    const token = req.headers.authorization?.startsWith("Bearer ")?req.headers.authorization:"";
    const extractToken = token?.substring(token?.indexOf(" "),token?.length-1);

    console.log(extractToken);



}