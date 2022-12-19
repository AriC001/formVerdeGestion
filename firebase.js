// Import the functions you need from the SDKs you need
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js'
const firebaseConfig = {
    apiKey: "AIzaSyDDVrvYTJACCmc7yfFzjYUwNKnwgIV3phs",
    authDomain: "prueba1-98abe.firebaseapp.com",
    projectId: "prueba1-98abe",
    storageBucket: "prueba1-98abe.appspot.com",
    messagingSenderId: "457018679265",
    appId: "1:457018679265:web:2f0d075c73059daa90fca0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
//import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js'

// Add Firebase products that you want to use


import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js'