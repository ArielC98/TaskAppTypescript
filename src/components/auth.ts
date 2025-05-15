import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { auth } from '../api/firebase';

// Registro de usuario
export async function registerUser(email: string, password: string, name: string): Promise<void> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Actualizar el displayName con el nombre ingresado
    await updateProfile(user, { displayName: name });

    console.log('Usuario registrado:', user.email, 'Nombre:', user.displayName);
    window.location.href = 'tasks.html';
  } catch (error: any) {
    console.error('Error en el registro:', error.message);
    alert(`Error al registrarse: ${error.message}`);
  }
}

// Inicio de sesión
export async function loginUser(email: string, password: string): Promise<void> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Usuario logueado:', user.email);
    // Redirigir al dashboard o tareas
    window.location.href = 'tasks.html';
  } catch (error: any) {
    console.error('Error en el inicio de sesión:', error.message);
    alert(`Error al iniciar sesión: ${error.message}`);
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // Usuario está logueado
    const displayName = user.displayName || user.email || 'User';
    // Actualizar el texto en la página
    const welcomeText = document.getElementById('welcomeText');
    if (welcomeText) {
      welcomeText.textContent = `Welcome, ${displayName}`;
    }
  } else {
    // No hay usuario logueado
    const welcomeText = document.getElementById('welcomeText');
    if (welcomeText) {
      welcomeText.textContent = 'Welcome, Guest';
    }
  }
});