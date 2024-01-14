import userModel from "../Schema/User.js";


const loginUser =async(req, res)=>{
    const {email, password} = req.body;
   try {
     let userEmail = await userModel.findOne({email});
     
   } catch (error) {
    console.log(error)
   }
}