import { formInput, formSubmit, formToggle } from './event.js';

const [$signinForm, $signupForm] = document.querySelectorAll('.form');

$signinForm.oninput = e => formInput(e);
$signupForm.oninput = e => formInput(e);
$signinForm.onsubmit = e => formSubmit(e);
$signupForm.onsubmit = e => formSubmit(e);
$signinForm.onclick = e => formToggle(e);
$signupForm.onclick = e => formToggle(e);
