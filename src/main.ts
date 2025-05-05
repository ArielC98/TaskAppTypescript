// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
import 'mdb-ui-kit';

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

document.addEventListener('DOMContentLoaded', () => {
  const loginTab = document.querySelector('#tab-login');
  const registerTab = document.querySelector('#tab-register');
  const loginForm = document.querySelector('#pills-login');
  const registerForm = document.querySelector('#pills-register');

  // Mostrar el formulario de login
  loginTab?.addEventListener('click', () => {
    if (loginForm && registerForm) {
      loginForm.classList.add('show', 'active');
      registerForm.classList.remove('show', 'active');
    }
  });

  // Mostrar el formulario de registro
  registerTab?.addEventListener('click', () => {
    if (loginForm && registerForm) {
      registerForm.classList.add('show', 'active');
      loginForm.classList.remove('show', 'active');
    }
  });
});
