let num=456;
let last=num%10;
let rd=parseInt(num/10);
let second=rd%10;
let first=parseInt(rd/10);
let rn=last*100+second*10+first;
console.table(rn);

let num1=789456123;
let res=num1.toString().split('').reverse('');
console.table(res);