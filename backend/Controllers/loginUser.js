import userModel from "../Schema/User.js";
import  jwt  from "jsonwebtoken";
import bcrypt from 'bcryptjs'
import { validationResult } from "express-validator";
const JWT_SECRET_KEY = '3$7&&@8nc32hr388n%$@^%!@b7ebhqe'


const loginUser = async (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    // returns true if not empty
    const { email, password } = req.body;
    try {
      let userData = await userModel.findOne({ email });
      

      if (!userData) {
        console.log("Acccount Not Found");
        return res.status(401).json({ error: "Try logging in with correct credentials" });
      }

      const isMatch = await bcrypt.compare(password, userData.password);

      if (!isMatch) {
        return res.status(401).json({ error: "Try logging in with correct credentials" });
      }

      const authToken = jwt.sign({UserID: userData._id},JWT_SECRET_KEY,{expiresIn: '1d'})

      console.log('logged in success')
      return res.json({ success: true, authToken: authToken });


    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  } else {
    res.send({ errors: result.array() });
  }
};
export default loginUser;
