// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6gsPYx-QAGE90J1OsmfNDOld_dF97PVU",
  authDomain: "taskapp-43b27.firebaseapp.com",
  projectId: "taskapp-43b27",
  storageBucket: "taskapp-43b27.firebasestorage.app",
  messagingSenderId: "297085093878",
  appId: "1:297085093878:web:804efdda6232ba5b93e9d7"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar auth
export const auth = getAuth(app);
export const db = getFirestore(app);
