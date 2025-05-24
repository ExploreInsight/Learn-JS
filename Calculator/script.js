const input = document.querySelector(".input");
const board = document.querySelector(".board");

const toRadians = (deg) => deg * (Math.PI / 180);

const factorial = (n) => {
  if (n < 0) return "Error";
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
};

const calculator = (btn) => {
  switch (btn) {
    case "C":
      input.value = "";
      break;
    case "=":
      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = "Error";
      }
      break;
    case "√":
      try {
        input.value = Math.sqrt(eval(input.value));
      } catch (error) {
        input.value = "Error";
      }
      break;
    case "^":
      input.value += "**";
      break;
    case "log":
      try {
        input.value = Math.log10(eval(input.value));
      } catch (error) {
        input.value = "Error";
      }
    case "sin":
      input.value = Math.sin(toRadians(eval(input.value)));
      break;
    case "cos":
      input.value = Math.cos(toRadians(eval(input.value)));
      break;
    case "tan":
      input.value = Math.tan(toRadians(eval(input.value)));
      break;
    case "exp":
      input.value = Math.exp(eval(input.value));
      break;
    case "ln":
      input.value = Math.log(eval(input.value));
      break;
    case "abs":
      input.value = Math.abs(eval(input.value));
      break;
    case "π":
      input.value += Math.PI;
      break;
    case "x!":
      input.value = factorial(eval(input.value));
      break;
    case "x²":
      input.value = Math.pow(eval(input.value), 2);
      break;
    case "mod":
      input.value += "%";
      break;

      break;
    default:
      input.value += btn;
  }
};

board.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const btn = e.target.innerText;
    calculator(btn);
  }
});
