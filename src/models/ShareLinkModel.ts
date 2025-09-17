import mongoose, {Schema,model} from "mongoose";


const ShareLinkSchema = new Schema({
    isShare:{
        type:Boolean,
        default: false,
        required:true,
},
    shareLink:{
        type:String,
        required:true,
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
},{timestamps:true})

export const ShareLinkModel = model("ShareLink",ShareLinkSchema);