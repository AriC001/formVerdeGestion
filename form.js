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
let scoreGenero = 0;


function validateForm(name) {
    event.preventDefault();
    console.log(document.forms[name])
    if(name != "form1"){
        for(let i = 0; i<10;i++){
            let x = document.forms[name][intToChar(i)];
            console.log(x);
            switch(x.value){
                case 'A': score = score + 1; scoreAmbiental++; break;
                case 'E': score = score + 1; scoreEconomico++; break;
                case 'G': score = score + 1; scoreGenero++; break;
                case 'S': score = score + 1; scoreSocial++; break;
                case 'B': break;
                default: break;
            }
        }
    }
    console.log(score);
    console.log(scoreAmbiental);
    console.log(scoreEconomico);
    console.log(scoreGenero);
    console.log(scoreSocial);
    formulario[formCount].style.display = "none"
    if(formCount == formulario.length-1){
        formulario[formCount].style.display = "none"
        //llamar a un funcion para mostrar el cuadro y el score
        window.location.href = "http://127.0.0.1:5500/results.html";
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