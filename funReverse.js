function reverse(num){
    var y=num,rev=0;
    while(y>0){
        rev=rev*10;
        rev=rev+(y%10);
        y=parseInt(y/10)
    }
    console.log("Reverse of "+num+" = "+rev)

}
const x=57394;
reverse(x);