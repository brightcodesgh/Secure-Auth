import Users from '../model/userModel.js';

const handleUser = async (req,res,next) =>{

    try{
        const user = await Users.findById(req.user.id).select("-password");

        const {name, email} = user;

        if(!user){
            return res.status(401).json({success:false, message:"User is not authorized"});
        }

       return res.status(200).json({
            success:true,
            message:"User Found",
            data:{
                name,
                email
            }
       })

    }catch(error){
        console.log(error.message);
        next(error)
    }
}

export default handleUser;