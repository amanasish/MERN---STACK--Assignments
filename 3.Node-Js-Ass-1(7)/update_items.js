const prompt = require('prompt-sync')();
const fs = require('fs');

//constructor func
function Item(id,name,quantity,price){
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}

exports.updateItem = ()=>{
    const id = prompt('Enter the id : ');
    let itemArr = JSON.parse(fs.readFileSync("item.json"));
    let modify = itemArr.filter(item => item.id == id);
    itemArr = itemArr.filter(item => item.id != id);
    let quantity1 = prompt(`Quantity : `);
    modify[0].quantity = quantity1;
    itemArr = [...itemArr, modify];

    fs.writeFile("item.json",JSON.stringify(itemArr),(err)=>{

            //call back function
            if(err)
                console.log(`Something went wrong****`)
            else
                console.log(`Items(s) with ${id} updated successfully`)
        })
    }