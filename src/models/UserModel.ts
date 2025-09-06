import { NextFunction } from "express";
import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'
import { stringify } from "querystring";


const UserSchema = new Schema({
    "name": { type: String, require: true },
    "email": { type: String, unique: true, require: true },
    "password": { type: String, require: true }
})

UserSchema.pre('save', async function (next) {
    try {
        const user = this;

        if (!user.isModified('password')) next();
        if (!user.password) next()
        else {
            const hashed = await bcrypt.hash(user.password, 10);
            this.password = hashed;
            next();
        }
    } catch (error) {
        next()
    }


})

UserSchema.methods.comparePassword = function(password:string){
    bcrypt.compare(password,this.password)
}

const UserModel = model("User", UserSchema);

export default UserModel;

