import express from "express";
import { UserModel } from "./db.js";
import cors from 'cors';
import helmet from "helmet";
import bodyParser, { json } from "body-parser";

export const app = express();

app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.post('/api/v1/signup',async (req, res) => {
    
    try {
        const {username,password} = req?.body;

    if (!username || !password) res.send(404).json({ message: "empty fields" });


    const response = await UserModel.create({
        useranme: username,
        password: password,
    })


    if (!response) res.send(500).json({ message: "server error" })

    res.send(200).json({message:"success",data:response});
    } catch (error) {
        console.log(error)
    }
})

app.get('api/v1/signup', async (req, res) => {

})




app.post('api/v1/content', (req, res) => { })
app.get('api/v1/content', (req, res) => { })
app.delete('api/v1/content', (req, res) => { })
app.post('api/v1/brain/share', (req, res) => { })
app.get('api/v1/brain/:sharelink', (req, res) => { });


