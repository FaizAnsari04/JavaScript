let num=151;
let temp=num;
let sum=0;
while(temp)
{
    let digit=temp%10;
    let value=digit*digit*digit;
    sum+=value;
    temp= parseInt(temp/10);
}
if(num==sum)
{
    console.log("Ha Hai Hai Bhai");
}
else{
    console.log("Kasam Se Nahi Hai");
}