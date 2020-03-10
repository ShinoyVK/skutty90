var x = 101;
var temp = x;
var y = 0;

while(temp!=0)
{
    y=y*10+(temp%10);
    temp=parseInt( temp/10);
}

if(x==y)
{
    console.log("Pallindrome");
}
else{
    console.log("Not Pallindrome");
}