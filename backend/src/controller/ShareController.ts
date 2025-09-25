
import {Request,Response} from "express";
import {CustomError} from "../Exception/CustomError.js";
import randomstring from 'randomstring';
import {ShareLinkModel} from "../models/ShareLinkModel.js";

const createShareLink = async (req:Request ,res:Response)=>{
    const isTrue = req.body.isTrue;
    if(!isTrue)throw new CustomError("Enable Share first",404);
    const shareable:string =  randomstring.generate();
    const user = res.locals.userDataFromDb;

    const response= await ShareLinkModel.create({
        isShare:true,
        shareLink:shareable,
        userId:user._id,
    })
res.status(200).json(response);

}


const verifyShareLink = async (req:Request ,res:Response)=>{
    const shareId = req.params.sharelink;
    if (!shareId)throw new CustomError("Enable ShareLink",404);

    const response = await ShareLinkModel.findOne({shareLink:shareId}).populate({
        path:"userId",
        populate:[
            {path:"brainData",
            populate:[
                {path:"tags"}
            ]
            }
        ]
    });
    console.log(response);
    if(!response)throw new CustomError("Enable ShareLink",404);
    // @ts-ignore
    res.status(200).json(response.userId.brainData);
}


export {createShareLink,verifyShareLink}
