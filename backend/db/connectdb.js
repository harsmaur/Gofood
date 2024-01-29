import mongoose from "mongoose";

export const connectdb = async(db_url)=>{
    try{
        const db_optins = {   };

        await mongoose.connect(db_url, db_optins);

        console.log('Connection Success');

        const food_items = await mongoose.connection.db.collection("food_items");
        const food_items_data = await food_items.find({}).toArray()
        global.food_items_data = food_items_data
        // console.log(food_items_data);
        //    console.log("harsh")
        const foodCategory =  await mongoose.connection.db.collection("food_Category");
        const food_cateogory_data = await foodCategory.find({}).toArray()
        global.food_cateogory_data = food_cateogory_data
        // console.log(food_cateogory_data);
              
            

        

      


        
            // console.log(global.food_items)
            // console.log(food_cateogory_data)
    
    }
    catch(err)
    {
        console.log(err);
    }
}