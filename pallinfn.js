var x = 1551;
reverseNum(x);

function reverseNum(a)
{
    var rev = 0;
    var temp = a;
    while(temp!=0)
    {
    rev = rev*10+temp%10;
    temp=parseInt(temp/10);
    }
    console.log(pallinCheck(rev,a));
    
}

function pallinCheck(p,a)
{
    if(p==a)
    {
        return "yes";
    }
    else{
        return "No"
    }
}