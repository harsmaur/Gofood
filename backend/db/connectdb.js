import mongoose from "mongoose";

export const connectdb = async(db_url)=>{
    try{
        const db_optins = {
            
          
        };

        await mongoose.connect(db_url, db_optins);
        console.log('Connection Success');
        const fetched_data = await mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        // console.log(data)
        
       
    
    }
    catch(err)
    {
        console.log(err);
    }
}