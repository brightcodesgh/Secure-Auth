import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config('./.env');
import { dbConnect }  from './config/DBConnect.js';
import { globalErrorHandler } from './middleware/globalErrorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { corsOptions } from './config/corsOptions.js';
import authRoutes from './routes/authRoutes.js';
import refreshTokenRoute from './routes/refreshTokenRoute.js';
import getUserRoute from './routes/getUserRoute.js';



dbConnect()

const PORT = 8080;

app.use(cors(corsOptions))
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/auth", refreshTokenRoute);
app.use("/api", getUserRoute);


app.use(globalErrorHandler)
app.listen(PORT,() =>{
    console.log(`App Running on Port ${PORT}`)
});