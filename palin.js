const x=1331;
var y=x;
rev=0;
while(y>0){
    rev=rev*10;
    rev=rev+(y%10);
    y=parseInt(y/10);

}
console.log("Number  is : "+x);
console.log("Reverse is : "+rev);
if (x==rev) {
    console.log("The number is PALINDROME")
    
} else {
    console.log("The number is not NOT PALINDROME")
    
}
