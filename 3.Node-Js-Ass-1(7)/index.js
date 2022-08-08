const addItems = require('./add_item');
const { removeItems } = require('./remove_item');
const {updateItem} = require('./update_items');
const {totalAmt} = require('./total');
const prompt = require('prompt-sync')();

const operation = prompt(`Which operation you want to performe ?`)
switch(operation){
    case 'add':
                addItems.addItem();
                break;
    case 'update':
                updateItem();
                break;
    case 'remove':
                var id = prompt(`Enter the item id that you want to removed?`);
                removeItems(id);
                break;
    case  'total':
                totalAmt();
                break;
    default:
                console.log(`No operation is going to be performed`)
                break;
}