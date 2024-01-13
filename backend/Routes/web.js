import createUser from "../Controllers/createUser.js";
import { body } from 'express-validator';
import express from 'express'
const router = express.Router();


router.post('/createUser',
    body('name').notEmpty(),
    body('email','Invalid email').isEmail(),
    body('password', 'Incorrect password').isLength({ min: 5 }),
    body('geolocation').notEmpty()
    ,
    createUser);
export default router;