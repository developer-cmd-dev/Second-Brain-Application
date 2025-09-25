import mongoose, {Schema} from "mongoose";
import bcrypt from 'bcrypt'


const UserSchema = new Schema({
    "name": { type: String, require: true },
    "email": { type: String, unique: true, require: true },
    "password": { type: String, require: true },
    "brainData":[{type:mongoose.Schema.Types.ObjectId,ref:"BrainData"}],
},{timestamps:true})

UserSchema.pre('save', async function (next) {
    try {
        const user = this;

        if (!user.isModified('password')) next();
        if (!user.password) next()
        else {
            this.password = await bcrypt.hash(user.password, 10);
            next();
        }
    } catch (error) {
        next()
    }


})

UserSchema.methods.comparePassword = function(password:string){
    bcrypt.compare(password,this.password)
}

const UserModel =mongoose.model("User", UserSchema);

export default UserModel;

