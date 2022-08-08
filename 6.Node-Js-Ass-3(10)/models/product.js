const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    product_name:{
        type:String,
        require:true
    },
    product_price:{
        type:Number,
        require:true
    },
    product_description:{
        type:String,
        require:false
    },
    product_image:{
        type:String,
        require:false
    }
},{timestamps:true})

exports.product = mongoose.model('product',itemsSchema);