let num= 23;
let flag=false;
for(let i=2;i<num;i++)
{
    if(num%i==0)
    {
        flag=true;
    }
}
if(flag==false)
{
    console.log("The Number Is Prime::"+num);

}
else
{
    console.log("The Number Is Not Prime::"+num);

}