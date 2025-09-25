import express from "express";
import bodyParser, { json } from "body-parser";
import cookieParser from 'cookie-parser'
import morgan from 'morgan';
import router from "./routes/router.js";
import {errorMiddleware} from "./middleware/error.middleware.js";
import helmet from "helmet";

export const app = express();

app.use(morgan("dev"))
app.use(helmet())
app.use(cookieParser())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json());
app.use("/api/v1",router);
app.use(errorMiddleware)




