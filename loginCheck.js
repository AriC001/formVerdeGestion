const login = document.querySelectorAll('.logged-in')
const logout = document.querySelectorAll('.logged-out')
const form = document.querySelector('.form1')

//console.log(login);
//console.log(logout);

export const loginCheck = user => {
    console.log(user);
    if(user){
        login.forEach(link => link.style.display = 'none')
        logout.forEach(link => link.style.display = 'block')
        form.style.visibility = 'visible'
    }else{
        login.forEach(link => link.style.display = 'block')
        logout.forEach(link => link.style.display = 'none')
        //form.style.visibility = 'hidden'
    }
}