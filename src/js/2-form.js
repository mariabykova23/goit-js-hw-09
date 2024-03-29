'use strict';

const STORAGE_DATA_INPUT = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', formInput);
form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const data = {
    email,
    message,
  };

  if (!email || !message) {
    return;
  } else {
    localStorage.removeItem(STORAGE_DATA_INPUT);
    form.reset();
  }

  console.log(data);
}

function formInput() {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const data = {
    email,
    message,
  };

  saveDatatoLS(STORAGE_DATA_INPUT, data);
}

function saveDatatoLS(key, value) {
  const zip = JSON.stringify(value);

  localStorage.setItem(key, zip);
}

function infoFromLs(key) {
  const unzip = localStorage.getItem(key);

  try {
    return JSON.parse(unzip);
  } catch {
    return unzip;
  }
}

function init() {
  const data = infoFromLs(STORAGE_DATA_INPUT);

  form.elements.email.value = data.email;
  form.elements.message.value = data.message;
}

init();
