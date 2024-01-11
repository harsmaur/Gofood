
import userModel from "../Schema/User.js";

const createUser = async (req, res) => {
    try {
        const { name, email, password, location } = req.body;
        const doc = new userModel({
            name: name,
            email: email,
            password: password,
            location: location
        })

        await doc.save();
        res.json({ "success": "true" })

    } catch (error) {

        console.log(error)
        res.json({ "success": "false" })
        
    }
}

export default createUser;

