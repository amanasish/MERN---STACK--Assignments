const express = require('express');
const productRoutes = require('./routes/pros');
const {dbconn} = require('./config/db');
const index = express();

const port = 1234;

//middleware
index.use(express.json())
index.use(productRoutes);

dbconn(); 
index.listen(port,()=>{
    console.log(`Server started at ${port}`);
})