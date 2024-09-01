
const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const app = express();
const userRouter = require('./Routes/user.route')


const port = process.env.PORT;
const db_uri = process.env.DB_URI

mongoose
.connect(db_uri)
.then(()=>{
    console.log(`DB IS CONNECTED`)
    app.listen(port,()=>console.log(`Server is Connected at the port ${port}`))
})
.catch((error)=>console.log('DB IS NOT CONNECTED'))

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'], // Specify the allowed methods
  };
  
  // Use the CORS middleware with the options
  app.use(cors(corsOptions));

app.use(express.json());
app.use('/users',userRouter);