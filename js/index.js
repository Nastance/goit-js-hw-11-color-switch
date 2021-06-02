const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener('click', startBackgroundChange);
stopBtn.addEventListener('click', stopBackgroundChange);

function startBackgroundChange() {

  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);

  stopBtn.disabled = false;
  startBtn.disabled = true;
};


function stopBackgroundChange() {
  clearInterval(intervalId);

  startBtn.disabled = false;
  stopBtn.disabled = true;
};

