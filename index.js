const express = require("express");
const app = express();
require('dotenv').config();
const db = require('./db')

const PORT = process.env.PORT;



app.listen(PORT, ()=>{
    console.log('App is running.......')
})