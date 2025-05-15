import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../api/firebase';
import { resetPassword } from './reset';

const loginForm = document.querySelector('#pills-login form') as HTMLFormElement;

const forgotPasswordLink = document.getElementById('forgotPasswordLink');

const rememberMeCheckbox = document.getElementById('rememberMecheck') as HTMLInputElement;



const rememberedEmail = localStorage.getItem('rememberedEmail');
if (rememberedEmail) {
  const loginEmailInput = document.getElementById('loginName') as HTMLInputElement

  loginEmailInput.value = rememberedEmail;
  rememberMeCheckbox.checked = true;
}



loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = (document.getElementById('loginName') as HTMLInputElement).value.trim();
  const password = (document.getElementById('loginPassword') as HTMLInputElement).value;

  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }



  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log('User logged in:', user.email);

    if (rememberMeCheckbox.checked) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }

    // Redirigir a la página de tareas
    window.location.href = './tasks.html';
  } catch (error: any) {
    console.error('Login error:', error.message);
    alert('Login failed: ' + error.message);
  }

});


forgotPasswordLink?.addEventListener('click', async (e) => {
  e.preventDefault();

  const email = prompt('Please enter your email to receive a password reset link:');
  if (!email) {
    alert('Email is required to reset password.');
    return;
  }

  try {
    await resetPassword(email);
    // alert('Password reset email sent! Please check your inbox.');
  } catch (error: any) {
    alert('Error sending password reset email: ' + error.message);
  }
});




