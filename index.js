let firstNumber = parseInt(prompt("Enter your first number"));
let secondNumber = parseInt(prompt("Enter your second number")); 

if (isNaN(firstNumber) || isNaN(secondNumber) ) {
    alert('Wrong input! Refresh the page and use numbers');
}

let operator = prompt("Enter operator (+, -, *, /)");

if (operator === '+') {
    alert( '=' + ' ' + (firstNumber + secondNumber));
}else if (operator === '-') {
    alert('=' + ' ' + (firstNumber - secondNumber));
}else if (operator === '*') {
    alert('=' + ' ' + (firstNumber * secondNumber));
}else if (operator === '/') {
    alert('=' + ' ' + (firstNumber / secondNumber));
}else{
    alert('Wrong Operator')
}

