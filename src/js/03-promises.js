import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const firstDel = form.querySelector('[name="delay"]')
const stepDel = form.querySelector('[name="step"]')
const amountOfPromises = form.querySelector('[name="amount"]')


form.addEventListener('submit', submitForm)

function submitForm(evt) {
  evt.preventDefault();
  uprisingPromises(parseInt(amountOfPromises.value), parseInt(firstDel.value), parseInt(stepDel.value))
}

function uprisingPromises(amount, delay, step) {
  if (!amount) {
    Notiflix.Report.failure('Amount cannot be lesser than 1!', '', 'Sorry!')
  }
  let nxtDelay = delay
  for (let i = 1; i <= amount; i++) {
    createPromise(i, nxtDelay).then(onSuccess, onError);
    nxtDelay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
    }
  }, delay)
  })
};

function onSuccess(result) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`)
};
function onError(failure) {
  Notiflix.Notify.failure(`❌ Rejected promise ${failure.position} in ${failure.delay}ms`)
};
