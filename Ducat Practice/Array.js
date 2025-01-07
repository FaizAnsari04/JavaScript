let array=["a","b","c","d"];
console.log(array);
let arr=['h','i',"j",'k'];
console.log(arr);
const  cars=[];
cars[0]="Verna";
cars[1]="Venue";
cars[2]="Create";
cars[3]="Elantra";
console.table(cars);

/**Addition Of Two Array**/

let arr1=[ 12,23,36];
let arr2=[10,12,52];
let add=[];
for(let i=0;i<arr1.length;i++)
{
    let sum=arr1[i]+arr2[i];
    add[i]=sum;
}
console.table(add);


let arr4=[ 12,23,36];
let arr3=[10,12,52];
let mul=[];
for(let i=0;i<arr1.length;i++)
{
    let sum=arr1[i]*arr2[i];
    mul[i]=sum;
}
console.table(mul);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.table(length);

const fruit = ["Banana", "Orange", "Apple", "Mango"];
let lengt = fruit.sort();
console.table(lengt);

let leng= fruits.reverse()
console.table(leng);

const point=[40,52,,96,87,42,12,36];
let sorts=point.sort();
console.table(sorts);

const points=[40,52,,96,87,42,12,36];
let s=Math.min.apply.points.sort();
console.table(s);