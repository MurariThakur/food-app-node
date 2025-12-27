const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');  
const connectDB = require('./config/db.js');


//environment variables
dotenv.config();

const app=express();
const PORT=process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//database connection
connectDB();

app.use('/api/v1/',require('./routes/test.js'));
app.use('/api/v1/auth',require('./routes/authRoutes.js'));

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to my server");
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`.white.bgMagenta);
});