// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEi5KTcXtYUXMPIOxWZ5oPdIrme7qtb-Y",
  authDomain: "authentication-1991c.firebaseapp.com",
  projectId: "authentication-1991c",
  storageBucket: "authentication-1991c.appspot.com",
  messagingSenderId: "16508282331",
  appId: "1:16508282331:web:afc3bfbbbc267b287bf3fe",
  measurementId: "G-M4924343W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
