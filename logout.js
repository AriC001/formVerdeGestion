import { signOut } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
import { auth } from './firebase';

const logout = document.querySelector('#logout')

logout.addEventListener('click', async () => {
    await signOut(auth)
    console.log("logout");
})