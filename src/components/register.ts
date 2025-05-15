
import { registerUser } from './auth'

interface User {
  name: string;
  username: string;
  email: string;
  password: string;
}

const registerForm = document.querySelector('#pills-register form') as HTMLFormElement;

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Obtener los valores del formulario
  const name = (document.getElementById('registerName') as HTMLInputElement).value.trim();
  const username = (document.getElementById('registerUsername') as HTMLInputElement).value.trim();
  const email = (document.getElementById('registerEmail') as HTMLInputElement).value.trim();
  const password = (document.getElementById('registerPassword') as HTMLInputElement).value;
  const repeatPassword = (document.getElementById('registerRepeatPassword') as HTMLInputElement).value;

  // Validación simple
  if (!name || !username || !email || !password || !repeatPassword) {
    alert('Please fill in all fields.');
    return;
  }

  if (password !== repeatPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Obtener referencia al checkbox
  const termsAccepted = (document.getElementById('registerCheck') as HTMLInputElement).checked;

  if (!termsAccepted) {
    alert('You must accept the terms and conditions.');
    return;
  }

  try{
    await registerUser(email,password);
  }
  catch (error){
    console.log('Registration failed', error);
  }

  registerForm.reset();
});