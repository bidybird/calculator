let screen = "";
document.querySelector("#display").textContent = screen;

let solution = 0;
let display = "4 / 3"; //screen;
displayArray = display.split(" ");
console.log(displayArray);

function runCalculator() {
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

const btn1 = document.querySelector("#buttonOne");
btn1.onclick = () => (screen = screen + "1");

const btn2 = document.querySelector("#buttonTwo");
btn2.onclick = () => (screen = screen + "2");

const btn3 = document.querySelector("#buttonThree");
btn3.onclick = () => (screen = screen + "3");

const btn4 = document.querySelector("#buttonFour");
btn4.onclick = () => (screen = screen + "4");

const btn5 = document.querySelector("#buttonFive");
btn5.onclick = () => (screen = screen + "5");

const btn6 = document.querySelector("#buttonSix");
btn6.onclick = () => (screen = screen + "6");

const btn7 = document.querySelector("#buttonSeven");
btn7.onclick = () => (screen = screen + "7");

const btn8 = document.querySelector("#buttonEight");
btn8.onclick = () => (screen = screen + "8");

const btn9 = document.querySelector("#buttonNine");
btn9.onclick = () => (screen = screen + "9");

const btn0 = document.querySelector("#buttonZero");
btn0.onclick = () => (screen = screen + "0");

const btnAdd = document.querySelector("#buttonAdd");
btnAdd.onclick = () => (screen = screen + " + ");

const btnSubtract = document.querySelector("#buttonSubtract");
btnSubtract.onclick = () => (screen = screen + " - ");

const btnMultiply = document.querySelector("#buttonMultiply");
btnMultiply.onclick = () => (screen = screen + " X ");

const btnDivide = document.querySelector("#buttonDivide");
btnDivide.onclick = () => (screen = screen + " / ");

const btnEnter = document.querySelector("#buttonEnter");
btnEnter.addEventListener("click", runCalculator);

const btnAny = document.querySelectorAll("button");
btnAny.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#display").textContent = screen;
  });
});
