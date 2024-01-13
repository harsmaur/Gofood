import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    geolocation: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

const userModel = mongoose.model('userData', userSchema)
export default userModel;
