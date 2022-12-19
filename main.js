
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');

import { auth } from './firebase.js';

import { signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
import { loginCheck } from './loginCheck.js';
const login = document.querySelector('#login-form')

login.addEventListener('submit', async (e) => {
  e.preventDefault();
  passwordError.innerHTML = '';
  emailError.innerHTML = '';
  const email = document.querySelector('#login-email').value
  const password = document.querySelector('#login-password').value


  try {
    const userLoginCredential = await signInWithEmailAndPassword(auth,email, password)
    const loginModal = document.querySelector('#LogInModal')
    const modal = bootstrap.Modal.getInstance(loginModal)
    modal.hide()
    //puedo llamar a que se despliegue el form.html, pero tendria que hacerse la comprobacion en el form.html si enserio está logeado para ver la pagina. Porque puden entrar sino poniedo www.asdasd.com/form.html
    //console.log(userLoginCredential);
  } catch(error){
    if (error.code === "auth/wrong-password") {
      passwordError.innerHTML = 'Wrong password';
    }else if (error.code === "auth/user-not-found") {
      emailError.innerHTML = 'User not found';
      //showMessage('User not found', 'error')
    } else {
      alert(error.message);
  }
}
})

onAuthStateChanged(auth, async (user) => {
  loginCheck(user)
})