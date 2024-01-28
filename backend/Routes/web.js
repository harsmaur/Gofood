import createUser from "../Controllers/createUser.js";
import { body } from 'express-validator';
import express from 'express'
import loginUser from "../Controllers/loginUser.js";
import display_food_items from "../Controllers/display_food_items.js";
const router = express.Router();


router.post('/createUser',
    body('name').notEmpty(),
    body('email', 'Invalid email').isEmail(),
    body('password', 'Incorrect password').isLength({ min: 5 }),
    body('geolocation').notEmpty()
    ,
    createUser);

router.post('/loginUser', 
body('email', 'Invalid email').isEmail(),
body('password', 'Incorrect password').isLength({ min: 5 }),
loginUser);



router.post('/display_food_items',display_food_items);

export default router;