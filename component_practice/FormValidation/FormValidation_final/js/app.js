import { InputEvent, submitEvent, toggleForm } from './event.js';

const [$signinForm, $signupForm] = document.querySelectorAll('.form');

$signinForm.oninput = e => InputEvent(e);
$signupForm.oninput = e => InputEvent(e);
$signinForm.onsubmit = e => submitEvent(e);
$signupForm.onsubmit = e => submitEvent(e);
$signinForm.onclick = e => toggleForm(e);
$signupForm.onclick = e => toggleForm(e);
