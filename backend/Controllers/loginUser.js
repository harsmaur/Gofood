import userModel from "../Schema/User.js";


const loginUser = async(req, res)=>{
    const {email, password} = req.body;
   try {
     let userData = await userModel.findOne({email});

     if(!userData){
      console.log('Acccount Not Found')
      return res.status(401).json({error: 'Try logging in with correct credentials'})
     }

     if(!userData.password === password){
      return res.status(401).json({error: 'Try logging in with correct credentials'})
     }

     return res.json({success: true});
   } catch (error) {
    console.log(error)
   }
}
export default loginUser;