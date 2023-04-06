import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]')
const days = document.querySelector('span[data-days]')
const hours = document.querySelector('span[data-hours]')
const minutes = document.querySelector('span[data-minutes]')
const seconds = document.querySelector('span[data-seconds]')
const dataPicker = document.querySelector('#datetime-picker')
let chosedDataInMs = null;
let timerId = null;

startBtn.addEventListener('click', setTimer)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const actualData = new Date();
    if (selectedDates[0].getTime() < actualData.getTime()) {
      if (!startBtn.getAttribute('disabled')) {
        startBtn.setAttribute('disabled', '');
      }
      Notiflix.Notify.failure('Please choose a date in the future.',
        { timeout: 4000, cssAnimationStyle: 'zoom' });
      return;
    };
    chosedDataInMs = selectedDates[0].getTime();
    startBtn.removeAttribute('disabled');
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function setTimer() {

  startBtn.setAttribute('disabled', '');
  dataPicker.setAttribute('disabled', '');
  const actualData = new Date();
  let timerInMs = chosedDataInMs - actualData.getTime();
 
  timerId = setInterval(() => {
    if (timerInMs < 1000) {
      clearInterval(timerId);
      Notiflix.Report.success('Congratulations!', '', 'Thanks!', { buttonFontSize: '17px' });
      startBtn.removeAttribute('disabled', '');
      dataPicker.removeAttribute('disabled', '');
    return;
    };
    timerInMs = timerInMs - 1000;
    let convertData = convertMs(timerInMs);
    days.textContent = convertData.days
    hours.textContent = convertData.hours
    minutes.textContent = convertData.minutes
    seconds.textContent = convertData.seconds
  }, 1000)
  

}

flatpickr("#datetime-picker", options);
