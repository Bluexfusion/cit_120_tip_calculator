var number1=Number(prompt("what is bill amount??"));
var tax=0.07;
var tip=0.05;
var answer=(number1*tax)+(number1*tip)+number1;
document.body.querySelector("#cool").innerHTML=answer;