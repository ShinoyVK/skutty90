var x = 98544;
var y = 0;
while(x!=0)
{
    y=y*10+(x%10);
    x=x/10-(x%10/10);
}
var t =125;
t=parseInt( t/10);
console.log(t);
console.log(y);