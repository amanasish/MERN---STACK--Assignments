const prompt = require('prompt-sync')();
const fs = require('fs');

//constructor func
function Item(id,name,quantity,price){
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}

exports.addItem = ()=>{
    const howManyItems = prompt('Enter How many Items ?');
    let itemArr=[];
    for(let i=0;i<howManyItems;i++){
        const id = prompt(`Enter Item id ?`);
        const name = prompt(`Enter Item name ?`);
        const quantity = prompt(`enter Item quantity ?`);
        const price = prompt(`Enter Item price ?`);
        //object
        const item = new Item(id,name,quantity,price);
        //pushing
        itemArr=[...itemArr,item];
    }

    fs.writeFile("item.json",JSON.stringify(itemArr),(err)=>{

        //call back function
        if(err)
            console.log(`Something went wrong****`)
        else
            console.log(`Items(s) added successfully`)
    })
}