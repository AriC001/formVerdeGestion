let formulario = document.getElementsByTagName("form")
let section = document.getElementsByTagName("section")

let formCount = 1;

let score = 0;
let totalQ = 100;
let scoreAmbiental = 0;
let totalQAmbiental = 29;
let scoreEconomico = 0;
let totalQEconomico = 28;
let scoreSocial = 0;
let totalQSocial = 20;
let scoreGenero = 0;
let totalQgenero = 23;
let scores2 = []
let a;


function validateForm(name) {
    event.preventDefault();
    // console.log(document.forms[name])
    if(name != "form1"){
        for(let i = 0; i<10;i++){
            let x = document.forms[name][intToChar(i)];
            // console.log(x);
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
        // llamar a un funcion para mostrar el cuadro y el score
        // console.log();
        changes()
        document.getElementById('resultados').style.display='block';
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
 


//  let html = 'http://'+location.host+"/results.html"
//  let html2 = 'https://'+location.host+"/results.html"
 function changes(){
    document.getElementById('scoreTotal').innerHTML= score;
    document.getElementById('scoreAmb').innerHTML= scoreAmbiental;
    document.getElementById('scoreSoc').innerHTML= scoreSocial;
    document.getElementById('scoreEco').innerHTML= scoreEconomico;
    document.getElementById('scoreGen').innerHTML= scoreGenero;


    const arrowTotal = document.getElementById('arrow1')
    const arrowAmb = document.getElementById('arrow2')
    const arrowEco = document.getElementById('arrow3')
    const arrowSoc = document.getElementById('arrow4')
    const arrowGen = document.getElementById('arrow5')

    let deg = "deg"

    arrowTotal.style.rotate = ((score*180)/100)+deg;
    arrowAmb.style.rotate = ((scoreAmbiental*180)/29)+deg;
    arrowEco.style.rotate = ((scoreEconomico*180)/28)+deg
    arrowSoc.style.rotate = ((scoreSocial*180)/20)+deg
    arrowGen.style.rotate = ((scoreGenero*180)/23)+deg
}
    
   



