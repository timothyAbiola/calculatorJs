let num1 = parseInt (prompt('Enter first number: '));
let opr = prompt("Choose operator: - / * +");
let num2 = parseInt (prompt('Enter second number: '))

let result;

if (opr === '+') {
   result = num1 + num2;
} else if (opr === '-') {
   result = num1 - num2;
} else if (opr === '/') {
   result = num1 / num2;
} else if (opr === '*') {
   result = num1 * num2;
} else {
   alert("You have entered the wrong operator");
}

alert(`${num1} ${opr} ${num2} = ${result}`);