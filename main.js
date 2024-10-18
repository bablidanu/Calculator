const display = document.getElementById("display");

function calc(event) {
  const value = event.target.value;
  let currentValue = display.value;

  switch (value) {
    case "=":
      try {
        display.value = calculateExpression(currentValue);
      } catch (error) {
        display.value = "Error";
      }
      break;
    case "C":
      display.value = 0;
      break;
    default:
      if (currentValue === "0") {
        display.value = value;
      } else {
        display.value += value;
      }
  }
}

function calculateExpression(expression) {
  // You can use a library like mathjs or implement your own expression parser
  // For simplicity, we'll use a basic parser here
  const operators = ["+", "-", "*", "/"];
  let result = 0;
  let operator = "+";

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (operators.includes(char)) {
      operator = char;
    } else if (!isNaN(char)) {
      const num = parseFloat(char);
      switch (operator) {
        case "+":
          result += num;
          break;
        case "-":
          result -= num;
          break;
        case "*":
          result *= num;
          break;
        case "/":
          result /= num;
          break;
      }
    }
  }

  return result;
}
