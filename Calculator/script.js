let operands = document.querySelectorAll(".operand");
let operators = document.querySelectorAll(".operator");
let display = document.querySelector("#display");
let equalToBTN = document.querySelector("#equalTo");
let clearBTN = document.querySelector("#clear");
let backspaceBTN = document.querySelector("#backspace");

operands.forEach((el) => {
  el.addEventListener("click", () => {
    display.value += el.value;
  });
});

operators.forEach((el) => {
  el.addEventListener("click", () => {
    display.value += el.value;
  });
});

const evaluate = () => {
  if (display.value !== "") {
    try {
      let result = math.evaluate(display.value);
      display.value = result;
    } catch (e) {
      display.value = "Error";
    }
  }
};

equalToBTN.addEventListener("click", evaluate);
clearBTN.addEventListener("click", () => {
  display.value = "";
});
backspaceBTN.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});
