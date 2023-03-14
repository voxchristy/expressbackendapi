const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const colors = require('colors');

const connectDB = require('./config/db');

//Route file import
const bootcamps = require('./routes/bootcamps');

//LOAD ENV VARS
dotenv.config({path:'./config/config.env'});

//Connect to Database
connectDB();

const app = express();

//Body Parser
app.use(express.json());

//Middleware
//app.use(logger);

//Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Mount Routes
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise)=>{
    console.log(`Error: ${err.message}`.red.bold);
    //close server and exit process
    server.close(()=> process.exit(1));
});