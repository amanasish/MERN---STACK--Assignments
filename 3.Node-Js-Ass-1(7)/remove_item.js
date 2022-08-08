const prompt = require('prompt-sync')();
const fs = require('fs');

//constructor func
function Item(id,name,quantity,price){
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}

exports.removeItems = (id)=>{
    let itemArr = JSON.parse(fs.readFileSync("item.json"));
    //Final Array
    itemArr = itemArr.filter(item=>item.id !=id)
    fs.writeFile("item.json",JSON.stringify(itemArr),(err)=>{

        //call back function
        if(err)
            console.log(`Something went wrong****`)
        else
            console.log(`Items(s) with ${id} removed successfully`)
    })
}