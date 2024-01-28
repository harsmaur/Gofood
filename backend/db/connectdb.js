import mongoose from "mongoose";

export const connectdb = async(db_url)=>{
    try{
        const db_optins = {   };

        await mongoose.connect(db_url, db_optins);

        console.log('Connection Success');

        const collection = await mongoose.connection.db.collection("food_items");
        const data = await collection.find({}).toArray();
            global.food_items = data;
            // console.log(global.food_items)
        // console.log(data)
    
    }
    catch(err)
    {
        console.log(err);
    }
}