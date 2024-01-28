import createUser from "../Controllers/createUser.js";
import { body } from 'express-validator';
import express from 'express'
import loginUser from "../Controllers/loginUser.js";
const router = express.Router();


router.post('/createUser',
    body('name').notEmpty(),
    body('email', 'Invalid email').isEmail(),
    body('password', 'Incorrect password').isLength({ min: 5 }),
    body('geolocation').notEmpty()
    ,
    createUser);

router.post('/loginUser',loginUser);
export default router;