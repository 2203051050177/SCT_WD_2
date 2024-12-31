
const display = document.querySelector('.display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapTimesList = document.getElementById('lap-times');

let intervalId;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function updateDisplay() {
  display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

function startStopwatch() {
  intervalId = setInterval(() => {
    milliseconds++;
    if (milliseconds === 100) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }, 10);
}

function pauseStopwatch() {
  clearInterval(intervalId);
}

function resetStopwatch() {
  clearInterval(intervalId);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  updateDisplay();
  lapTimesList.innerHTML = '';
}

function lapTime() {
  const lapTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  const li = document.createElement('li');
  li.textContent = lapTime;
  lapTimesList.appendChild(li);
}

startBtn.addEventListener('click', () => {
  startStopwatch();
});

pauseBtn.addEventListener('click', () => {
  pauseStopwatch();
});

resetBtn.addEventListener('click', () => {
  resetStopwatch();
});

lapBtn.addEventListener('click', () => {
  lapTime();
});