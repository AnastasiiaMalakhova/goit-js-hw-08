import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput({ target }) {
  const key = target.name;
  formData[key] = target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function getStorageData() {
  const data = localStorage.getItem(LOCALSTORAGE_KEY);
  const parseData = JSON.parse(data);
  if (parseData) {
    if (parseData.email) {
      email.value = parseData.email;
    }
    if (parseData.message) {
      message.value = parseData.message;
    }
  }
}
getStorageData();
