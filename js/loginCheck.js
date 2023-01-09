const login = document.querySelectorAll('.logged-in')
const logout = document.querySelectorAll('.logged-out')
const form = document.querySelector('.form1')
const h2 = document.querySelector('#logged')
const resultados = document.querySelector('#allResultados')

//console.log(login);
//console.log(logout);

export const loginCheck = user => {
    if(user){
        login.forEach(link => link.style.display = 'none')
        logout.forEach(link => link.style.display = 'block')
        form.style.visibility = 'visible'
        h2.innerHTML=""
        h2.style.display='none'
        
    }else{
        login.forEach(link => link.style.display = 'block')
        logout.forEach(link => link.style.display = 'none')
        form.style.visibility = 'hidden'
        resultados.style.display='none'
        h2.innerHTML="Necesita estar Logeado para ver el formulario"
        h2.style.display = 'block'
    }
}