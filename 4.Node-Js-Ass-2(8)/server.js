const express = require('express');
const fs = require('fs');
//instance of express framework
const app = express();

//creation of server
const port = 1234;

//API 1 to show full info
app.get('/',(req,res)=>{
    const itemArr = JSON.parse(fs.readFileSync("cart.json"));
    let total_price=0;
    for(let i=0;i<itemArr.length;i++){
        total_price += (itemArr[i].product_price)*(itemArr[i].product_quantity);
    }
    res.status(200).json({
        message:"*** Data Retrived ***",
        cart:itemArr,
        total_price:(`${total_price}`)
    })
})

//API 2 to show specific info
app.get('/:product_id',(req,res)=>{
    product_id = req.params.product_id;
    const content = JSON.parse(fs.readFileSync("cart.json"));
    const pro_info = content.filter(item=>item.product_id==product_id);
    res.status(200).json({
        message:"*** Data Retrived ***",
        cart:pro_info
    })
})

app.listen(port,()=>{
    console.log(`Server Started at port ${port}`);
})