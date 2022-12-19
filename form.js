let formulario = document.getElementsByTagName("form")
let section = document.getElementsByTagName("section")

let formCount = 1;

let score = 0;
let totalQ = 100;
let scoreAmbiental = 0;
let totalQAmbiental = 100;
let scoreEconomico = 0;
let totalQEconomico = 100;
let scoreSocial = 0;
let totalQSocial = 100;


function validateForm(name) {
    event.preventDefault();
    for(let i = 0; i<2;i++){
        let x = document.forms[name][intToChar(i)];
        //console.log(x.value);
        switch(x.value){
            case 'A': score = score + 1; break;
            case 'B': break;
            default: break;
        }
    }
    console.log(score);
    formulario[formCount].style.display = "none"
    if(formCount == formulario.length-1){
        formulario[formCount].style.display = "none"
        alert("Congrats")
    }else{
        formCount++;
        formulario[formCount].style.display = "block"
    }
    
  }

  function intToChar(int) {
    // 👇️ for Uppercase letters, replace `a` with `A`
    const code = 'a'.charCodeAt(0);
    //console.log(code); // 👉️ 97
  
    return String.fromCharCode(code + int);
  }