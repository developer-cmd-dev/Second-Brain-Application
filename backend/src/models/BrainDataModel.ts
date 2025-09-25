import mongoose, {Schema,model} from 'mongoose';
import {type} from "node:os";


const BrainDataSchema = new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    tags:[{type:mongoose.Schema.Types.ObjectId,ref:"Tags"}],
    type:[{type:String}],
    link:{type:String,required:true},
},{timestamps:true})


export const BrainDataModel = model('BrainData',BrainDataSchema);