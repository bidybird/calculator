let solution = 0;
function add(a, b) {
  solution = a + b;
}

function subtract(a, b) {
  solution = a - b;
}

function multiply(a, b) {
  solution = a * b;
}

function divide(a, b) {
  if (b == 0) {
    solution = undefined;
    return console.log("You can't divide by zero");
  }
  solution = a / b;
}
