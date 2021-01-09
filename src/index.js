import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId;

// document.body.style.background = '#000'
const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');


btnStart.addEventListener('click', function onStart() {
  switchActiveButton(btnStop, btnStart);
  timerId = setInterval(() => {
    return runColorChange();
  }, 1000);
  console.log(timerId);
});

btnStop.addEventListener('click', function onStop() {
  switchActiveButton(btnStart, btnStop);
  clearInterval(timerId);
});


function switchActiveButton(run, off) {
  off.setAttribute('off', 'off');
  run.removeAttribute('off');
}

function runColorChange() {
  const index = randomIntegerFromInterval(0, colors.length - 1);
  colorForBody(colors[index]);
}

function colorForBody(color) {
  body.style.cssText = `background-color: ${color};`;
}