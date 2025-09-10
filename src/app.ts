import express from "express";
import { UserModel } from "./db.js";
import cors from 'cors';
import helmet from "helmet";
import bodyParser, { json } from "body-parser";

import router from "./routes/router.js";
import {errorMiddleware} from "./middleware/error.middleware.js";

export const app = express();


app.use(bodyParser.urlencoded())
app.use(bodyParser.json());
app.use("/api/v1",router);
app.use(errorMiddleware)




