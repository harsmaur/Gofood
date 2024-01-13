
import userModel from "../Schema/User.js";
import { validationResult } from 'express-validator';

const createUser = async (req, res) => {
    //check validation
    const result = validationResult(req);
    if (result.isEmpty()) {
       
         return res.send(`Hello body is validated`);
    }

    res.send({ errors: result.array() });
 
    try {
        const { name, email, password, geolocation } = req.body;
        const doc = new userModel({
            name: name,
            email: email,
            password: password,
            geolocation: geolocation
        })

        await doc.save();
        res.json({ "success": "true" })

    } catch (error) {

        console.log(error)
        res.json({ "success": "false" })

    }
}

export default createUser;

