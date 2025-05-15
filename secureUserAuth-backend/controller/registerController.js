import Users from '../model/userModel.js';

const handleRegister = async (req,res,next) =>{
    try{

        const newUser = await Users.create(req.body);
        console.log(newUser)
        if(!newUser){
            return res.json({
                success: false,
                message:"Please fill all fields"
            })
        }

        const {email, name, _id} = newUser
        res.status(201).json({
            success:true,
            message:"User created",
            data: {
                id: _id,
                name,
                email,
            }
        })

    }catch(error){
        console.log(error);
        next(error)
    }
}

export default handleRegister;