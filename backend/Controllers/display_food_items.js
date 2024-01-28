import express from 'express';


const display_food_items = async (req, res)=>{
         try {
            console.log(global.food_items);
            res.send([global.food_items]);
            
         } catch (error) {
            console.log(error.message)
            res.send('Server Error')
         }


}
export default display_food_items;