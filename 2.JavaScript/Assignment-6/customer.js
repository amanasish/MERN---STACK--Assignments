//Customers List
let cust_list = [];
let cus = [];

//Input for Customers
for(let i=1;i<=5;i++){
    cus[i]={
        name:name,
        email:email,
        phone:phone,
        no_of_times_shopped: no_of_times_shopped,

        purchase_history:[
            {
                date_of_purchase:date_of_purchase,
                item_purchase:[
                    {
                        product_name:product_name,
                        product_price:product_price
                    }
                ]
            }
        ],

        //method
    total_amt:function(){
        for(let k=0;k<cust_list.length;k++){
            for(let i=0;i<this.cus[k].purchase_history.length;i++){
                for(let j=0;j<this.cus[k].purchase_history[i].item_purchase.length;j++){
                    this.total_amt = cus[k].purchase_history[i].item_purchase[j].product_price;
                }
            }
        }
    }
};

    const prompt =  require('prompt-sync')();
    var name = prompt("Enter the name of customer:-");
    var email = prompt("Enter the Email:-");
    var phone = prompt("Enter phone number:-");
    var no_of_times_shopped = prompt("Enter number of items shopeed:-");

    for(let i=0;i<no_of_times_shopped;i++){
        var date_of_purchase = prompt("Enter The date of purchase:-");
        
        for(let j=0;j<cus[i].purchase_history[i].item_purchase.length;j++){
            var product_name = prompt("Enter Product name:-");
            var product_price = prompt("Enter Product Price:-");
        }
    }
    //pushing in array of objects of customers
    cust_list.push(cus[i]);
}

// a. printing the details of customers
for(let i=0;i<cust_list.length;i++){
    //objects only
    console.log(cust_list[i]);
}

// b. customer shopped more than 5 items
let cusShopMoreThan5 = customer.filter(cust=>cust.no_of_times_shopped > 5);
//object 
console.log(`Customers Who Shopped More than 5 times:----${cusShopMoreThan5}`);

// c. 
for(let i=0;i<cust_list[i].length;i++){
    console.log(`Name:-${cus[i].name} Shopped Total Amount:-${cus[i].total_amt()}`);
}

