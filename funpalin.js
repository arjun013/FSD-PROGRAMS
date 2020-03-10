function palin(x)
{
    var y=x;
    var rev=0;
    while(y>0)
    {
        rev=rev*10+(y%10);
        y=parseInt(y/10);
        
    }
    if (rev==x) {
        return "palindrome";
        
    } else {
        return "not palindrome";
    }
}
const a=20902;
const result=palin(a)
console.log(a+" is "+result);