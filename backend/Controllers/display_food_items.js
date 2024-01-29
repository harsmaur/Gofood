import express from 'express';


const display_food_items = async (req, res)=>{
         try {
            // console.log(global.food_items_data);
            res.send([global.food_items_data, global.food_cateogory_data]);
            
         } catch (error) {
            console.error(error.message)
            res.send('Server Error')
         }


}
export default display_food_items;