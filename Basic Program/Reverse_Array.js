let arr=[5,6,9,8,7];
let size=arr.length;
for(let i=0;i<arr.length/2;i++)
{
    let temp=arr[i];
    arr[i]=arr[size-i];
    arr[size-i]=temp;

}
console.log("The Reverse Of Array::");
console.table(arr);