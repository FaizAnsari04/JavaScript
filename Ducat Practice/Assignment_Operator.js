
var op='*'
var num1 = 10
 var num2 = 120
// var op = prompt("Chose the Option \n Press + For Addition \n Press - for Subtraction \n Press * For Multiplication \n Press / for Division \n Pres % for Modules ");
if (op == '+') {
    console.log(`${num1}+${num2}-->Addition=${num1+num2}`);
}
else if (op == '-') {
    console.log(`${num1}-${num2}-->Subtraction=${num1-num2}`);
}
else if (op == '*') {
    console.log(`${num1}*${num2}--> Multiplication=${num1*num2}`);
}
else if (op == '%') {
    console.log(`${num1}%${num2}-->Nodulus=${num1%num2}`);
}
else if (op == '/') {
    console.log(`${num1}/${num2}-->Division=${num1/num2}`);
}
else{
    console.log("Enter valid Option");
    
}