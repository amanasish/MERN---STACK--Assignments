const arr = new Array(-1,3,6,15,2)
let size = arr.length;
var sum = 0;
console.log(`Size of array is ${size}`);
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>0 && arr[i]%2==0 && arr[i]%3==0){
        sum = sum + arr[i];
    }
}

console.log(`Sum of +ve and multiple of 2 and 3 is ${sum}`);

