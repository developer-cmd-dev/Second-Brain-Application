import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { MongoClient } from 'mongodb';
import * as dontenv from 'dotenv';
import {app} from './app.js';

dontenv.config();   


const  PORT:number=4000;

console.log(process.env.MONGODB_CONNECTION)

//@ts-ignore
mongoose.connect(process.env.MONGODB_CONNECTION)
.then(()=>{
    console.log("MongoDB Connected");
    app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`))
}).catch(err=>{
    console.log(err.message)
})