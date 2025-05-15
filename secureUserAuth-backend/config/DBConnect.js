import { appConfig } from './appConfig.js';
import mongoose from 'mongoose';

export const dbConnect = async (req,res) =>{
    try{
        const conn = await mongoose.connect(appConfig.databaseUrl);
        console.log("DB connected to", conn.connection.host);
        return conn
    }catch(error){
        res.status(500).json("An unexpected error occurred")
        process.exit(1);
    }
}