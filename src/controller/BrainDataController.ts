import {Request,Response} from "express";
import mongoose from "mongoose";
import {TagsModel} from "../models/TagsModel.js";
import {CustomError} from "../Exception/CustomError.js";
import {BrainDataModel} from "../models/BrainDataModel.js";
import UserModel from "../models/UserModel.js";




const addBrainData =async (req:Request ,res:Response)=>{
    let {title, content, type,tags, link,} = req?.body;
        try{

        let dataArr=[];

       for (const tag of tags) {
       const dbData= await TagsModel.findOne({tagName:tag});
       if(!dbData){
          const data = await TagsModel.create({tagName:tag});
          // @ts-ignore
           dataArr.push(data);
       }else{
           dataArr.push(dbData);
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
      const savedInUser= await UserModel.updateOne({_id:userData._id.toString(),title:title},{$set:{brainData:response}})
     if(!savedInUser) throw new CustomError("Internal Server Error",500)
            console.log(savedInUser);
            res.status(200).json(response);

        }catch(err){
        // @ts-ignore
        throw new CustomError(err.message,505);
    }

}

export {addBrainData}
