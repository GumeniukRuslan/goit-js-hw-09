const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

startBtn.addEventListener('click', startChangeColor);
stopBtn.addEventListener('click', stopChangeColor);

function startChangeColor() {
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeColor() {
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled');
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


