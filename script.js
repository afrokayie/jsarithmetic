let num1 = prompt("enter num1");
let operator = prompt("Enter operator: (+, -, *, /)");
let num2 = prompt("enter num2");

let result;

if (operator == "+"){
    result = num1 + num2;
} else if (operator == "-"){
    result = num1 - num2;
} else if (operator == "*"){
    result = num1 * num2;
} else if (operator == "/"){
    result = num1 / num2;
}
alert(Number(result));