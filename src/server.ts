import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { MongoClient } from 'mongodb';
import * as dontenv from 'dotenv';
import {app} from './app.js';

dontenv.config();   


const  PORT:number=4000;


(async () => {
    const mongoUri =process.env.MONGODB_CONNECTION;
    
    
    mongoose.connect(`${mongoUri}`)
    .then(() =>{
        console.log("Mongodb is connected");
         app.listen(PORT, (): void => console.log(`App is running on ${PORT}`))
    })
    .catch(error=>console.log(error.message))
})()

