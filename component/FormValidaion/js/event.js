import { toaster, createToastAction } from './toast.js';
import { inputStatus, isSubmit, isSamePassword } from './auth.js';
const [$signinLink, $signupLink] = document.querySelectorAll('.link>a');
let allInputOfForm;

const formInput = e => {
  allInputOfForm = e.target.parentNode.parentNode.querySelectorAll('input');
  const [$iconSuccess, $iconError] = e.target.parentNode.querySelectorAll('.icon');
  const $errorMessage = e.target.parentNode.querySelector('.error');
  const inputName = inputStatus[e.target.name]; //변수명 inputType 으로 바꾸는게 어떨지

  inputName.status =
    e.target.name !== 'confirm-password'
      ? inputName.RegExp.test(e.target.value)
      : isSamePassword(e.target.value);

  $iconSuccess.classList.toggle('hidden', !inputName.status);
  $iconError.classList.toggle('hidden', inputName.status);
  $errorMessage.textContent = inputName.status ? '' : inputName.errorMessage;

  e.target.closest('.form').querySelector('.button').disabled = !isSubmit(allInputOfForm);
};

const formSubmit = e => {
  e.preventDefault();
  toaster.add(createToastAction('success', 'Well done!', 'This is a success alert'));

  const userInfo = {};
  allInputOfForm.forEach(input => {
    userInfo[`${input.nextElementSibling.textContent}`] = `${input.value}`;
  });
  console.log(userInfo);
};

const formToggle = e => {
  if (!e.target.parentNode.classList.contains('link')) return;
  $signinLink.closest('form').classList.toggle('hidden');
  $signupLink.closest('form').classList.toggle('hidden');
};

export { InputEvent, submitEvent, toggleForm };
