import express from 'express';
import { connectdb } from './db/connectdb.js';
const port = 5000;
const app = express();
const db_url = "mongodb+srv://mharsh228:h2Sg6dJKRdPzgzKB@cluster0.zbtpjhh.mongodb.net/?retryWrites=true&w=majority"
app.get('/', (req, res)=>{
    res.send("Hello World");
})


//connection to database
connectdb(db_url);



app.listen(port, ()=>{
   console.log(`Listening to port ${port}`)
})