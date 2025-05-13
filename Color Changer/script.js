let randomColorBtn = document.getElementById("changeBackGround");
let input = document.getElementById("colorInput");
let currentColor = document.getElementById("currentColor");
let applyColorBtn = document.getElementById("applyColor");

let body = document.body;
let color = ["red", "blue", "green", "yellow", "purple", "orange"];

randomColorBtn.addEventListener("click", function () {
  let randomColor = color[Math.floor(Math.random() * color.length)];
  body.style.backgroundColor = randomColor;
  currentColor.innerHTML = randomColor;
  currentColor.style.color = randomColor;
});

applyColorBtn.addEventListener("click", function () {
  let inputColor = input.value;

  if (!inputColor) {
    alert("Please enter a color");
  }

  body.style.backgroundColor = inputColor;
  currentColor.innerHTML = inputColor;
  currentColor.style.color = inputColor;
  input.value = "";
});
