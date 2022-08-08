const mongoose = require('mongoose');
exports.dbconn = async ()=>{
    try{
        const dbURL = 'mongodb+srv://amanasish:qwer12345A@cluster0.ck5itrl.mongodb.net/productdb?retryWrites=true&w=majority'
        await mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("*Database Connected*");
    }catch(err){
        console.log(`Database conection error ${err.message}`);
    }
}