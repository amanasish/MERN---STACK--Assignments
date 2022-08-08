function avrg(){
    var avg=0;
    var sum=0;
    var count=0;
    const arr=new Array(-2,34,-33,-1,-3.2,100,23,87,0.5,1.2)
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            sum=sum+arr[i];
            count++;
        }
    }
    avg=sum/count;

    return avg;
}

console.log(`Average is ${avrg()}`);