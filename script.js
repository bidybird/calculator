let solution = 0;
let display = "4 / 3";
displayArray = display.split(" ");
console.log(displayArray);

while (displayArray.length > 1) {
  switch (displayArray[1]) {
    case "+":
      add(displayArray[0], displayArray[2]);
      break;
    case "-":
      subtract(displayArray[0], displayArray[2]);
      break;
    case "X":
      multiply(displayArray[0], displayArray[2]);
      break;
    case "/":
      divide(displayArray[0], displayArray[2]);
  }
  solution = solution.toFixed(2);
  displayArray[2] = solution;
  displayArray.shift();
  displayArray.shift();
  console.log(displayArray);
}

console.log("test end");

function add(a, b) {
  solution = Number(a) + Number(b);
}

function subtract(a, b) {
  solution = Number(a) - Number(b);
}

function multiply(a, b) {
  solution = Number(a) * Number(b);
}

function divide(a, b) {
  if (b == 0) {
    solution = undefined;
    return console.log("You can't divide by zero");
  }
  solution = a / b;
}
