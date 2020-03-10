const x=2067;
var y=x;
var h=0;//reverse number
while(y!=0){
    h=h*10;
    h=h+(y%10);
    y=(y/10)-((y%10)/10);//y=parseInt(y/10)
}
console.log("Number  is : "+x);
console.log("Reverse is : "+h);
