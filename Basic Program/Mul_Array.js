let arr=[5,6,9];
let arr1=[5,6,9];
let res=[]
for(let i=0;i<arr.length;i++)
{
   res[i]= arr[i]*=arr1[i]

}
console.table(res);
