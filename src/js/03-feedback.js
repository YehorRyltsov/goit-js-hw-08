import throttle from 'lodash.throttle';

const CURRENT_INPUT = 'feedback-form-state';
var formData = {};
let fback = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

fback.form.addEventListener('input', throttle(onMassageInput, 500));
fback.form.addEventListener('submit', onFormSubmit);

onPopulateTextarea();

function onFormSubmit(e) {
  console.log(formData);
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(CURRENT_INPUT);
}

function onMassageInput(e) {
  formData[e.target.name] = e.target.value;
  const currentMessage = JSON.stringify(formData);
  localStorage.setItem(CURRENT_INPUT, currentMessage);
}
function onPopulateTextarea(e) {
  const saveMessage = localStorage.getItem(CURRENT_INPUT);
  if (saveMessage) {
    formData = JSON.parse(saveMessage);
  }
  if (formData.email) {
    fback.email.value = formData.email;
  }
  if (formData.message) {
    fback.message.value = formData.message;
  }
}
