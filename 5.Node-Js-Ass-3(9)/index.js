const express = require('express');
const fs = require('fs');
const {Items}=require('./items');
const {uuid} = require('uuidv4');
const {dbconn} = require('./config/db');
const index = express();

const port = 1234;

//middleware
index.use(express.json())

//List All
index.get('/', (req, res) => {
    try{
        const filearray = fs.readdirSync(__dirname);
        let cartArr = [];
        let message ='';
        if(filearray.includes('product.json'))
            cartArr = JSON.parse(fs.readFileSync('product.json'));
        if(cartArr.length > 0)
            message = 'Products loaded successfully'
        else
            message = 'No Products found' 
        return res.status(200).json({
            message: message,
            cartArr
        })
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
    
})

//Adding input
index.post('/add',(req, res) => {
    try{
        //Getting content from the directory 
        const filearray = fs.readdirSync(__dirname);
        let cartArr = [];
        let error ='';
        //checking for file product.json existing in the directory or not
        if(filearray.includes('product.json'))
            cartArr = JSON.parse(fs.readFileSync('product.json'));
        
        const{ product_name,product_price,product_description,product_image }= req.body;
        //validation
        if(product_name =='' && error == ''){
            error = "Missing product name"
            res.status(400).json({
                message: error
            })
        }
        if(product_price =='' && error == ''){
            error = "Missing product price"
            res.status(400).json({
                message: error
            })
        }
        if(product_description =='' && error == ''){
            error = "Missing product dicription"
            res.status(400).json({
                message: error
            })
        }
        if(product_image =='' && error == ''){
            error = "Missing product image"
            res.status(400).json({
                message: error
            })
        }
        
        const item = new Items(uuid(),product_name,product_price,product_description,product_image);
        cartArr = [...cartArr,item];

        fs.writeFile('product.json', JSON.stringify(cartArr),(err)=>{
            if(err)
                res.status(500).json({
                    message:"Something went wrong while writing file",
                })
            res.status(200).json({
                message:"Product added successfully",
                cartArr
            })
        })
        
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong2",
            error:err.message
        })
    }
})

//Deleting
index.delete('/delete/:product_id',(req,res)=>{
    let product_id=req.params.product_id;
    let content=JSON.parse(fs.readFileSync("product.json"));
    content=content.filter(content=>content.product_id!=product_id);
    fs.writeFile('product.json',JSON.stringify(content),(err)=>{
        if(err)
        return res.status(500).json({
        message:"Something is wrong",
        error:err
    })
    else
    return res.status(201).json({
        message:"deleted",
        content
    
    })
})
})

//Update
index.put("/update/:product_id",(req,res)=>{
    const {product_id}=req.params
    const {product_id1,product_name,product_price,product_description,product_image}=req.body;
    //let product_id=req.params.product_id;
    let upd=JSON.parse(fs.readFileSync('product.json'));
    upd=upd.filter(upd=>upd.product_id1!=product_id);
    upd=[...upd,{product_id144,product_name,product_price,product_description,product_image}];
    fs.writeFile('product.json',JSON.stringify(upd),(err)=>{
        if(err)
        return res.status(500).json({
        message:"Something is wrong",
        error:err
    })
    return res.status(201).json({
        message:"updated",
        upd
    })
    })
})

dbconn(); 
index.listen(port,()=>{
    console.log(`Server started at ${port}`);
})