import Users from '../model/userModel.js';
import { handleToken } from '../utils/jwtToken.js';
import { appConfig } from '../config/appConfig.js';

const accesstoken = appConfig.accessToken;
const refreshtoken = appConfig.refreshToken;
const refreshTokenExpires = appConfig.refreshTokenExpires;
const accessTokenExpires = appConfig.accessTokenExpires;

export const handleAuthentication = async (req,res,next) =>{
   
    try{
        const {email, password} = req.body;
        const user = await Users.findOne({email}).select('+password');
        if(!user){
            return res.status(404).json({
                success: false,
                message: "Please provide a valid email"
            })
        }
        const isMatch = await user.comparePassword(password, user.password)

        if(isMatch){
            const accessToken = handleToken(user._id, accesstoken, accessTokenExpires);
            const refreshToken = handleToken(user._id, refreshtoken, refreshTokenExpires);

            const sendRefreshCookies = {
                maxAge: 60 * 60 * 1000,
                httpOnly:true,
                secure: false,
                sameSite: 'lax',
                path:'/'
            }

            const sendAccessCookies = {
                maxAge: 2 * 60 * 1000, 
                httpOnly:true,
                secure: false,
                sameSite: 'lax',
                path:'/'
            }

            res.cookie('refreshToken', refreshToken, sendRefreshCookies);
            res.cookie('accessToken', accessToken, sendAccessCookies);
            res.status(200).json({
                success:true,
                message: "User Logged in",
                data: user
            })
            console.log("User Logged in")
        }else{
           res.status(401).json({
            success:false,
            message: "email or password incorrect"
           })
           console.log("email or password Incorrect")
        }

    }catch(error){
        console.log(error);
        next(error)
    }

};




