
let timerInput = document.getElementById('timeInput');
let startButton = document.getElementById('startButton');
let pauseButton = document.getElementById('pauseButton');
let resetButton = document.getElementById('resetButton');
let timerDisplay = document.getElementById('timerDisplay');

let timer;
let timeRemaining;
let isPaused = false;

startButton.addEventListener('click', () => {
  if(!timerInput.value) {
    alert("Please enter a time in seconds.");
    return;
  }
  if (!timer) {
    timeRemaining = parseInt(timerInput.value);
    startTimer();
  }
});

pauseButton.addEventListener('click', () => {
  if (timer) {
    if (isPaused) {
      startTimer();
    } else {
      clearInterval(timer);
      isPaused = true;
    }
  }
});

resetButton.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
  timeRemaining = 0;
  timerDisplay.textContent = "0";
  isPaused = false;
  timerInput.value = "";
});

function startTimer() {
  timerDisplay.textContent = timeRemaining;
  timer = setInterval(() => {
  

    if (timeRemaining > 0) {
      timeRemaining--;
      timerDisplay.textContent = timeRemaining;
    } else {
      clearInterval(timer);
      timer = null;
      alert("Time's up!");
    }
  }, 1000);
  isPaused = false;
}
