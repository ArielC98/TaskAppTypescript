
import { registerUser } from './auth'


const registerForm = document.querySelector('#pills-register form') as HTMLFormElement;

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Obtener los valores del formulario
  const name = (document.getElementById('registerName') as HTMLInputElement).value.trim();
  const email = (document.getElementById('registerEmail') as HTMLInputElement).value.trim();
  const password = (document.getElementById('registerPassword') as HTMLInputElement).value;
  const repeatPassword = (document.getElementById('registerRepeatPassword') as HTMLInputElement).value;
  const termsAccepted = (document.getElementById('registerCheck') as HTMLInputElement).checked;

  // Validations
  if (!name || !email || !password || !repeatPassword) {
    alert('Please fill in all fields.');
    return;
  }

  if (password !== repeatPassword) {
    alert('Passwords do not match.');
    return;
  }


  if (!termsAccepted) {
    alert('You must accept the terms and conditions.');
    return;
  }

  await registerUser(email, password, name);

  registerForm.reset();
});

