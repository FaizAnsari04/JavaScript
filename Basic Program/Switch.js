let Grade='F';
let Result;
switch(Grade)
{
    case'A':
    Result="Honour Fisrt Division";
    console.log("Pass With Honour First Divission");
    break;
    
    case'B':
    Result="Fisrt Division";
    console.log("Pass With First Divission");
    break;
    case'C':
    Result="Second Division";
    console.log("Pass With Second Divission");
    break;
    case'D':
    Result="Pass";
    console.log("Pass With No Divission");
    break;
    
    case'F':
    Result="Fail";
    console.log("Not Cleard The Exam");
    break;

    default:
        console.log("Not Cleared");

}