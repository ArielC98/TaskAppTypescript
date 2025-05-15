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
  const tabLogin = document.getElementById('tab-login') as HTMLAnchorElement;
  const tabRegister = document.getElementById('tab-register') as HTMLAnchorElement;
  const pillsLogin = document.getElementById('pills-login') as HTMLElement;
  const pillsRegister = document.getElementById('pills-register') as HTMLElement;

  tabLogin.addEventListener('click', (e) => {
    e.preventDefault();

    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');

    pillsLogin.classList.add('show', 'active');
    pillsRegister.classList.remove('show', 'active');
  });

  tabRegister.addEventListener('click', (e) => {
    e.preventDefault();

    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');

    pillsRegister.classList.add('show', 'active');
    pillsLogin.classList.remove('show', 'active');
  });
});


//Validacion de inicio de sesion
// document.addEventListener('DOMContentLoaded', () => {
//   const loginForm = document.querySelector('#pills-login form') as HTMLFormElement;

//   loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const email: string = (document.getElementById('loginName') as HTMLInputElement).value.trim();
//     const password: string = (document.getElementById('loginPassword') as HTMLInputElement).value.trim();

//     const user: User | undefined = mockUsers.find(u => u.email === email && u.password === password);

//     if (user) {
//       alert(`Bienvenido, ${user.username}`);
//       localStorage.setItem('loggedUser', JSON.stringify({ name: 'Juan' }));
//       window.location.href = '../tasks.html';
//     } else {
//       alert('Credenciales incorrectas');
//     }
//   });
// });

