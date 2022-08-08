const arr=new Array(0,-3,10,5,2,-4)
var max=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(`The Maximum number is ${max}`);