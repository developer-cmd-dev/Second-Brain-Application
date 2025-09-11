import mongoose, {Schema,model} from "mongoose";


const TagsSchema = new Schema({
    tagName:String,
},{timestamps:true})

export const TagsModel=mongoose.model("Tags",TagsSchema);