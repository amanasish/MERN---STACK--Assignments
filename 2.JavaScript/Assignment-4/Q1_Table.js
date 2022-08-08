const table= document.getElementsByTagName('table')[0];
console.log(table.tHead.rows[0].cells)
table.tHead.rows[0].style.backgroundColor= 'pink'
table.tBodies[0].rows[0].style.backgroundColor='#f9b4ab'
table.tBodies[0].rows[1].style.backgroundColor='#FDEBD3'
table.tBodies[0].rows[2].style.backgroundColor='#6484a0'
table.tBodies[0].rows[3].style.backgroundColor='#679186'
table.tBodies[0].rows[4].style.backgroundColor='#bbd4ce'
// print even cells text
for(let i=0;i<5;i++){
    for(let j=0;j<5;j++)
    {
        if(j%2==0 && j!=0){
            console.log(document.getElementById('form_table').tBodies[0].rows[i].cells[j].innerHTML);
        }
        
    }
}


