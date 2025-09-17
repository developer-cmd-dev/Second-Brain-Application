import {Request,Response} from "express";
import mongoose from "mongoose";
import {TagsModel} from "../models/TagsModel.js";
import {CustomError} from "../Exception/CustomError.js";
import {BrainDataModel} from "../models/BrainDataModel.js";
import UserModel from "../models/UserModel.js";
import {ObjectId} from "mongodb";

type User = {
    id:any,
    name:string,
    email:string,
    password:string,
    brainData:any,
}


const addBrainData =async (req:Request ,res:Response)=>{
    let {title, content, type,tags, link,} = req?.body;
        try{
        let dataArr:string[] = [];
       for (const tag of tags) {
       const dbData= await TagsModel.findOne({tagName:tag});
       if(!dbData){
          const data = await TagsModel.create({tagName:tag});
           dataArr.push(data._id.toString());
       }else{
           dataArr.push(dbData._id.toString());
       }

       }

    const response=     await BrainDataModel.create({
          title:title,
          content:content,
          type:type,
          tags:dataArr,
          link:link,
      })
            const userData = res.locals.userDataFromDb;
      const savedInUser= await UserModel.updateOne({_id:userData._id},{$set:{brainData:response}})
     if(!savedInUser) throw new CustomError("Internal Server Error",500)
            res.status(200).json(response);
        }catch(err){
        // @ts-ignore
        throw new CustomError(err.message,505);
    }

}

const getBrainData=async (req:Request ,res:Response)=>{
    const response = await res.locals.userDataFromDb.populate({
        path:"brainData",
        populate:[
            {path:"tags",name:"tags"},
        ]
    });
    console.log(response);
    res.status(200).json(response);
}

export {addBrainData,getBrainData}
