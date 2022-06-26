let num1 = parseInt (prompt('Enter first number: '));
let operator = prompt("Choose operator: - / * +");
let num2 = parseInt (prompt('Enter second number: '))

let result;

if (operator === '+') {
   result = num1 + num2;
} else if (operator === '-') {
   result = num1 - num2;
} else if (operator === '/') {
   result = num1 / num2;
} else if (operator === '*') {
   result = num1 * num2;
} else {
   alert("You have entered the wrong operator");
   Process.exit();
}

alert(`${num1} ${operator} ${num2} = ${result}`);