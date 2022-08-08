//Array of objects
let customer=[
    {
        name:'Aman',
        email:'cse.20bcsc76@silicon.ac.in',
        no_of_times_shopped:10,
        purchase_history: [
        {
            date_of_purchase:'1/07/2022',
            item_purchased:[
                {
                    product_name:'One Plus 10',
                    product_price:69000
                } ,
                {
                    product_name:'Mac Book Air M2',
                    product_price:149999 
                },
    
            ]
        },
        {
            date_of_purchase:'14/05/2022',
            item_purchased:[
                {
                    product_name:'Shirt',
                    product_price:100
                } ,
                
    
            ]
        }
        ]
        },
        {
        name:'Kamal',
        email:'Kamal@gmail.com',
        no_of_times_shopped:6,
        purchase_history: [
        {
            date_of_purchase:'01/07/2022',
            item_purchased:[
            {
                    product_name:'Books',
                    product_price:1300
            },
            {
                    product_name:'Bed Table',
                    product_price:2000 
            },
    
            ]
        },
        {
            date_of_purchase:'30/06/2022',
            item_purchased:[
            {
                    product_name:'Shoes',
                    product_price:80000
            },
                
    
            ]
        }
        ]
        },
        {
            name:'Ram',
            email:'Ram@gmail.com',
            no_of_times_shopped:2,
            purchase_history: [
            {
            date_of_purchase:'16/04/2022',
            item_purchased:[
                {
                    product_name:'Rings',
                    product_price:140
                } ,
                {
                    product_name:'Perfume',
                    product_price:4000 
                },
    
            ]
        },
        {
            date_of_purchase:'04/06/2022',
            item_purchased:[
            {
                    product_name:'Bed Sheet',
                    product_price:100
            },
                
    
            ]
        }
        ]
        },
        {
            name:'Priya',
            email:'Priya@gmail.com',
            no_of_times_shopped:7,
            purchase_history: [
            {
            date_of_purchase:'19/02/2022',
            item_purchased:[
                {
                    product_name:'Pencils',
                    product_price:105
                } ,
                {
                    product_name:'Clothes',
                    product_price:10000 
                },
    
            ]
        },
        {
            date_of_purchase:'02/05/2022',
            item_purchased:[
                {
                    product_name:'Colors',
                    product_price:1200
                } ,
                
    
            ]
        }
            ]
        },
        {
        name:'Amit',
        email:'Amit@gmail.com',
        no_of_times_shopped:2,
        purchase_history: [
        {
            date_of_purchase:'09/06/2022',
            item_purchased:[
            {
                    product_name:'Chips',
                    product_price:17000
            },
            {
                    product_name:'Juicer',
                    product_price:500
            },
    
            ]
        },
        {
            date_of_purchase:'12/07/2022',
            item_purchased:[
            {
                    product_name:'Shorts',
                    product_price:12000
            },
                
    
            ]
        }
        ]
        }
    ]
    // a.Details From Customer Array of Objects
    console.log(`All customers details`);
    for(let i=0;i<customer.length;i++)
    {
    console.log(customer[i].name);
        console.log(customer[i].email);
    console.log(customer[i].no_of_times_shopped);
        for(let j=0;j<customer[i].purchase_history.length;j++)
        {
            console.log(customer[i].purchase_history[j].date_of_purchase);
            for(let k=0;k<customer[i].purchase_history[j].item_purchased.length;k++)
            {
                console.log(customer[i].purchase_history[j].item_purchased[k].product_name);
                console.log(customer[i].purchase_history[j].item_purchased[k].product_price);
            }
        }
        console.log('\n');
    }

    // b. customer shopped more than 5 items

    console.log(`Customers Who Shopped More than 5 times:----`)
    for(let i=0;i<customer.length;i++)
    {
        if(customer[i].no_of_times_shopped > 5)
        {
            console.log(customer[i].name);
        }
    }

    // c. 

    let s=0;
    console.log(`Names Of Customers With Total Bill:---`);
    for(let i=0;i<customer.length;i++)
    {
    
    for(let j=0;j<customer[i].purchase_history.length;j++)
        {
            for(let k=0;k<customer[i].purchase_history[j].item_purchased.length;k++)
            {
                s=s+customer[i].purchase_history[j].item_purchased[k].product_price;
            }
            
        }
        console.log(`total purchase price of ${customer[i].name} is ${s}`);
        s=0;
    }