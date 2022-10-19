let screen = "";
let solution = 0;
let display = "";

function runCalculator() {
  display = screen;
  displayArray = display.split(" ");

  while (displayArray.length > 1) {
    switch (displayArray[1]) {
      case "+":
        add(displayArray[0], displayArray[2]);
        break;
      case "-":
        subtract(displayArray[0], displayArray[2]);
        break;
      case "x":
        multiply(displayArray[0], displayArray[2]);
        break;
      case "/":
        divide(displayArray[0], displayArray[2]);
    }
    solution = solution.toFixed(2);
    displayArray[2] = solution;
    displayArray.shift();
    displayArray.shift();
  }
  screen = solution;
}

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
    solution = "You can't divide by zero.";
    screen = "You can't divide by zero.";
    return "You can't divide by zero";
  } else {
    solution = a / b;
  }
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
btnAdd.onclick = () => {
  runIfOperator();
  screen = screen + " + ";
};

const btnSubtract = document.querySelector("#buttonSubtract");
btnSubtract.onclick = () => {
  runIfOperator();
  screen = screen + " - ";
};

const btnMultiply = document.querySelector("#buttonMultiply");
btnMultiply.onclick = () => {
  runIfOperator();
  screen = screen + " x ";
};

const btnDivide = document.querySelector("#buttonDivide");
btnDivide.onclick = () => {
  runIfOperator();
  screen = screen + " / ";
};

const btnEnter = document.querySelector("#buttonEnter");
btnEnter.addEventListener("click", runCalculator);

const btnClear = document.querySelector("#clearButton");
btnClear.onclick = () => (screen = "");

const btnAny = document.querySelectorAll("button");
btnAny.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#display").textContent = screen;
  });
});

const btnDel = document.querySelector("#buttonDelete");
btnDel.onclick = () => (screen = screen.slice(0, screen.length - 1));

function runIfOperator() {
  let splitScreen = screen;
  splitScreen = splitScreen.split("");
  for (let i = 0; i < splitScreen.length; i++) {
    if (
      splitScreen[i] === "+" ||
      splitScreen[i] === "-" ||
      splitScreen[i] === "x" ||
      splitScreen[i] === "/"
    ) {
      runCalculator();
    }
  }
}
