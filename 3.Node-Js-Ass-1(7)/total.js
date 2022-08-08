const prompt = require('prompt-sync')();
const fs = require('fs');

//constructor func
function Item(id,name,quantity,price){
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}

exports.totalAmt = (id)=>{
    let itemArr = JSON.parse(fs.readFileSync("item.json"));

    let total_price=0;
    for(let i=0;i<itemArr.length;i++){
        total_price += (itemArr[i].price)*(itemArr[i].quantity);
    }
    console.log(`Your Total Amount is ${total_price}`);
}