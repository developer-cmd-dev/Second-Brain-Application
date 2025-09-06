import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { MongoClient } from 'mongodb';
import * as dontenv from 'dotenv';

dontenv.config();   




const app = express();

app.post('/api/v1/signup', (req, res) => res.send(200).json({ message: "success" }))

app.get('api/v1/signup', (req, res) => { })
app.post('api/v1/content', (req, res) => { })
app.get('api/v1/content', (req, res) => { })
app.delete('api/v1/content', (req, res) => { })
app.post('api/v1/brain/share', (req, res) => { })
app.get('api/v1/brain/:sharelink', (req, res) => { });


(async () => {
    const mongoUri = process.env.MONGODB_CONNECTION;
    if (!mongoUri) {
        console.error('MONGODB_CONNECTION environment variable is not set.');
        process.exit(1);
    }
    MongoClient.connect(mongoUri)
    .then((res) =>{
         app.listen(4000, (error): void => console.log(error?.message))
    })
    .catch(error=>console.log(error.message))
})()

