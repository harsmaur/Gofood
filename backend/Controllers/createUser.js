import bcrypt from 'bcryptjs';
import userModel from "../Schema/User.js";
import { validationResult } from 'express-validator';
const saltRounds = 10;


const createUser = async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) { // returns true if not empty
        try {
            const { name, email, password, geolocation } = req.body;

            //hashing the password
            const salt = await bcrypt.genSalt(saltRounds)
            const hashPassword = await bcrypt.hash(password, salt);

            const doc = new userModel({
                name: name,
                email: email,
                password: hashPassword,
                geolocation: geolocation
            });

            await doc.save();
            res.json({ "success": "true" });

        } catch (error) {
            console.log(error);
            res.json({ "success": "false" });
        }
    } else {
        res.send({ errors: result.array() });
    }
};

export default createUser;
