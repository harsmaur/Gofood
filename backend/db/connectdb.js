import mongoose from "mongoose";

export const connectdb = async(db_url)=>{
    try{
        const db_optins = {
            dbname: "fdf"
        };

        await mongoose.connect(db_url, db_optins);
        console.log('Connection Success');
    }
    catch(err)
    {
        console.log(err);
    }
}