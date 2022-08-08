let sum=0;
let count = 0,j;
for(let i=1;i<50;i++){
    for(j=2;j<i;j++){
        //checking if there exist any other factor execpt 1 and the number itself thats why starting from 2 to n-1
        if(i%j==0){
            break;
        }
    }
    if(j==i){
        sum=sum+i;
        count++;
    }
    if(count==10){
        break;
    }
}

console.log(`Sum of first 10 prime numbers are ${sum}`);