const handleLogout = async (req,res, next) =>{

    try{
        const clearRefreshCookies = {
            httpOnly:true,
            secure: false,
            sameSite: 'lax',
            path:'/'
        }

        const clearAccessCookies = {
            httpOnly:true,
            secure: false,
            sameSite: 'lax',
            path:'/'
        }

        res.clearCookie('refreshToken', clearRefreshCookies);
        res.clearCookie('accessToken', clearAccessCookies);

        res.status(200).json({
            success: true,
            message: "user logged out successfully"
        })
        console.log("user Logged Out")
    }catch(error){
        console.log(error.message);
        next(error.message)
    }
}
export default handleLogout;