const mongoose = require('mongoose');
exports.dbconn = ()=>{
        const dbURL = 'mongodb+srv://amanasish:qwer12345A@cluster0.ck5itrl.mongodb.net/productdb?retryWrites=true&w=majority'
        mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>{
        console.log(`Database connected`)
}).catch((err)=>console.log(err));
}