const express = require('express');
const router = express.Router();
const {uuid} = require('uuidv4');
const {product}=require('../models/product');

//List All (TD)
router.get('/', async (req, res) => {
    try{
        const items = await product.find();
        return res.status(200).json({
            message:"Items Retrived Successfully",
            items
        })
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
    
})

//Adding input (TD)
router.post('/add', async (req, res) => {
    try{
        const{ product_name,product_price,product_description,product_image }= req.body;
        let error ='';
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
        
        const itemObj = {
            product_name,
            product_price,
            product_description,
            product_image
        }

        let item = new product(itemObj);
        await item.save();
        res.status(200).json({
            message:"Items Saved Successfully",
            item
        })

    }catch(err){
        return res.status(500).json({
            message:"Something went wrong2",
            error:err.message
        })
    }
})

//delete
router.delete("/delete/:product_id",async(req,res)=>{
    try{
        const {product_id}=req.params;
        await product.findByIdAndDelete(product_id);
        return res.status(200).json({
            message:"Product Deleted Successfully"
        })
    }catch(err){
        return res.status(500).json({
            message:"Something Went Wrong",
            error:err.message
        })
    }
})

//Update
router.put("/update/:product_id", async (req,res)=>{

        try{
            const {product_id}=req.params;
            const {product_id1,product_name,product_price,product_description,product_image}=req.body;
            let error ='';
            
        //validation
        if(product_name =='' && error == ''){
            error = "Missing product name"
            return res.status(400).json({
                message: error
            })
        }
        if(product_price =='' && error == ''){
            error = "Missing product price"
            return res.status(400).json({
                message: error
            })
        }
        if(product_description =='' && error == ''){
            error = "Missing product dicription"
            return res.status(400).json({
                message: error
            })
        }
        if(product_image =='' && error == ''){
            error = "Missing product image"
            return res.status(400).json({
                message: error
            })
        }

            await product.findByIdAndUpdate(product_id,{product_id1,product_name,product_price,product_description,product_image})
            return res.status(200).json({
                message:"Product Updated Successfully"
        })
    }catch(err){
        return res.status(500).json({
            message:"Something Went Wrong",
            error:err.message
        }) 
    } 
    })

    module.exports = router;