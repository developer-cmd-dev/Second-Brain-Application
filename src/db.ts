import { Schema} from 'mongoose';
import mongoose from 'mongoose';


const UserSchema = new Schema({
    useranme:{type:String,unique:true},
    password:{type:String}
})

export const UserModel =mongoose.model('User',UserSchema);




