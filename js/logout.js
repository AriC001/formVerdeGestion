import { signOut } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from './firebase.js';

const logout = document.querySelector('#logout')
// console.log(logout);

logout.addEventListener('click', async () => {
    // console.log("logout");
    await signOut(auth)
    // console.log("logout");
})