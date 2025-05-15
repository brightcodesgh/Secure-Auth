import util from 'util';
import Users from '../model/userModel.js';
import { appConfig } from '../config/appConfig.js';
import jwt from 'jsonwebtoken';


export const protectedRoute  = async (req,res,next) =>{
    
    try{
        const token = req.cookies.accessToken

        const decoded = await util.promisify(jwt.verify)(
            token, appConfig.accessToken
        )
        const user  = await Users.findById(decoded.id);
        if(!user) return res.status(401).json({success:false, message:"unauthorized"});

        req.user = decoded;

        return next()
    }catch(error){
        console.log(error.message)
        return res.status(401).json({ message: 'Invalid or expired access token' });
    }

}