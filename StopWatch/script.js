let display = document.getElementById("display");
let startTime = 0;
let isRunning = false;
let elapsedTime = 0;
let timer = null; // will hold refrence

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(displayDate, 100);
    isRunning = true;
  }
}
function pause() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00.00.00.00";
}

function displayDate() {
  let currentTime = Date.now();

  elapsedTime = currentTime - startTime;

  let totalSeconds = Math.floor(elapsedTime / 1000);
  let hours = Math.floor(totalSeconds / 3600); // 3600 = 60*60 = 1hour
  let mintues = Math.floor((totalSeconds / 3600) % 60);
  let seconds = totalSeconds % 60;
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  display.textContent = `${String(hours).padStart(2, "0")}:${String(
    mintues
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(
    milliseconds
  ).padStart(2, "0")}`;
}
