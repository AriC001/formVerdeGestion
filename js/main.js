import { auth, datab } from './firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { addDoc, collection, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'; 
import { loginCheck } from './loginCheck.js';

const logout = document.querySelector('#logout')
const login = document.querySelector('#login-form')
const scoreChange = document.querySelector('#scoreTotal')

let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');

login.addEventListener('submit', async (e) => {
  e.preventDefault();
  passwordError.innerHTML = '';
  emailError.innerHTML = '';
  const email = document.querySelector('#login-email').value
  const password = document.querySelector('#login-password').value


  try {
    const userLoginCredential = await signInWithEmailAndPassword(auth,email, password)
    localStorage.setItem("email", JSON.stringify(email));
    console.log(email);
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

logout.addEventListener('click', async () => {
  await signOut(auth)
})

// const observer = new MutationObserver(() => {
//   console.log('callback that runs when observer is triggered');
// });

var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    sendb();
  });
});

mutationObserver.observe(document.documentElement.querySelector('#scoreTotal'),{attributes: true,
characterData: true,
childList: true,
subtree: true,
attributeOldValue: true,
characterDataOldValue: true
})


async function sendb(){
  let storedRespuestas = JSON.parse(localStorage.getItem("respuestas"));
  let email = JSON.parse(localStorage.getItem("email"));
  // storedRespuestas = {storedRespuestas}
  await addDoc(collection(datab, "respuestas"), {storedRespuestas});
  // console.log("Document written with ID: ");
  console.log(email);
    // {"__name__":"/databases/(default)/documents/resp/respuesta","id":"respuesta","data":{"asd":"123"}}
    // await setDoc(doc(datab, "respuesta", email), {storedRespuestas});
    // const docRef = await addDoc(collection(db, '/databases/(default)/documents/resp/{respuesta}'),{storedRespuestas});
    // console.log("Document written with ID: ", docRef.id);
    // console.log("QQ");
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
}



