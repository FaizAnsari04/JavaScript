let arr=[5,6,9];
let arr1=[5,6,9];
let res=[]
for(let i=0;i<arr.length;i++)
{
   res[i]= arr[i]+=arr1[i]

}
console.log("The Addition Of Array Is::");
console.table(res);

let sub=[5,6,9];
let sub1=[5,6,9];
let Subres=[]
for(let i=0;i<sub.length;i++)
{
   Subres[i]= sub[i]-=sub1[i]

}
console.log("The Subtraction Of Array Is::");
console.table(Subres);

let Mul=[5,6,9];
let Mul1=[5,6,9];
let Mulres=[]
for(let i=0;i<Mul.length;i++)
{
   Mulres[i]= Mul[i]*=Mul1[i]

}
console.log("The Multipication Of Array Is::");
console.table(Mulres);

let div=[5,6,9];
let div1=[5,6,9];
let Divres=[]
for(let i=0;i<div.length;i++)
{
   Divres[i]= div[i]/=div1[i]

}
console.log("The Division  Of Array Is::");
console.table(Divres);

