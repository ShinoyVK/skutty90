var x = 15425;

reverseNum(x);

function reverseNum(a)
{
    var rev = 0;
    while(a!=0)
    {
    rev = rev*10 + a%10;
    a = parseInt(a/10);
    }
    console.log(rev);
}