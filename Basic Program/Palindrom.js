let num=121;
let temp=num;
let ans=0,digit;
while(temp>0)
{
    digit=temp%10;
    ans=(ans*10)+digit;
    temp=parseInt(temp/10);
}
if(num==ans){
    console.log("Ha Hai");
}
else
{
    console.log("Nahi Hai");
}