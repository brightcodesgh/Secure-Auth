import jwt from 'jsonwebtoken';
import { appConfig } from '../config/appConfig.js';
import { handleToken } from '../utils/jwtToken.js';
import util from 'util';
import Users from '../model/userModel.js';


export const handleRefreshToken = async (req, res, next) =>{
    const token = req.cookies.refreshToken;
    const accessTokenExpires = appConfig.accessTokenExpires;

    try{
        if(!token){
            return res.status(404).json({
                success:false,
                message: "no token provided"
            })
        }

        const decodedToken = await util.promisify(jwt.verify)(token, appConfig.refreshToken);
        const user = await Users.findById(decodedToken.id);
        if(!user) return res.status(401).json({message: "user is not authorized"});

        const accesstoken = appConfig.accessToken
        const newAccessToken = handleToken(decodedToken.id, accesstoken, accessTokenExpires)
        
      
        const sendAccessCookies = {
            maxAge: 2 * 60 * 1000,
            httpOnly:true,
            secure: false,
            sameSite: 'lax',
            path:'/'
        }

        res.cookie('accessToken', newAccessToken, sendAccessCookies);
        return res.status(200).json({
            success: true,
            message: "Access token refreshed successfully",
            newAccessToken
        });

    }catch(error){
        console.log(error);
        next(error)
    }
}

