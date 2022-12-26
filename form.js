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
let results;
let j = 0;
let preguntas = []


function validateForm(name) {
    event.preventDefault();
    // // console.log(document.forms[name])
    // document.forms[name].forEach(('div',0) => {
    //     console.log( document.getElementsByTagName('lable').innerHTML)
    // });
    let labels = document.getElementsByClassName('label-form')
    if(name != "form1"){
        for(let i = 0; i<10;i++){
            if(document.forms[name][intToChar(i)] != undefined){
                let x = document.forms[name][intToChar(i)];
                // console.log(x);
                switch(x.value){
                    case 'A': score = score + 1; scoreAmbiental++; preguntas.push(wrap(labels[j],"Si"));j++; break;
                    case 'E': score = score + 1; scoreEconomico++;preguntas.push(wrap(labels[j],"Si"));j++; break;
                    case 'G': score = score + 1; scoreGenero++;preguntas.push(wrap(labels[j],"Si"));j++; break;
                    case 'S': score = score + 1; scoreSocial++;preguntas.push(wrap(labels[j],"Si"));j++; break;
                    case 'B': preguntas.push(wrap(labels[j],"No")); j++; break; 
                    default: break;
                }
            }
        }
    }else{
        let x = document.getElementsByClassName('company')
        for(let i =0;i<x.length;i++){
            preguntas.push(wrap(labels[j],x[i].value));
            j++;
        }

    }
    // console.log(score);
    // console.log(scoreAmbiental);
    // console.log(scoreEconomico);
    // console.log(scoreGenero);
    // console.log(scoreSocial);
    formulario[formCount].style.display = "none"
    if(formCount == formulario.length-1){
        formulario[formCount].style.display = "none"
        preguntas.push(scores(score,scoreAmbiental,scoreEconomico,scoreGenero,scoreSocial))
        localStorage.setItem("respuestas", JSON.stringify(preguntas));
        changes()
        document.getElementById('resultados').style.display='block';

        let preg = "    ";
        for(let i = 0; i<preguntas.length; i++){
            if(preguntas[i].opc != "Si"){
                preg += preguntas[i].pregunta + " " + preguntas[i].opc + "<br>"
                if(i == preguntas.length-1){
                    preg += "Total: " + preguntas[i].Total + "<br>" + "Economico: " + preguntas[i].Economico + "<br>" + "Ambiental: " + preguntas[i].Ambiental + "<br>" + "Social: " + preguntas[i].Social + "<br>" + "Genero: " + preguntas[i].Genero + "<br>"
                }
            }
        }

        Email.send({
            SecureToken : "d5e5614a-c92d-4997-8b9a-6e3e522acfcd",
            To : 'aricohen98@gmail.com',
            From : "formulario@verdegestion.com",
            Subject : "This is the subject",
            Body : preg,
          }).then(
          message => console.log(message)
          );

    }else{
        formCount++;
        formulario[formCount].style.display = "block"
        window.scrollTo(0, 0);
    }
  }

  function intToChar(int) {
    // 👇️ for Uppercase letters, replace `a` with `A`
    const code = 'a'.charCodeAt(0);
    //console.log(code); // 👉️ 97
  
    return String.fromCharCode(code + int);
  }
 
  function wrap(element,opcion) {
    let obj = {
        pregunta: element.innerHTML,
        opc: opcion,
    }
    return obj;
    }

  function scores(score,scoreAmbiental,scoreEconomico,scoreGenero,scoreSocial){
    let obj = {
        Total: score,
        Ambiental: scoreAmbiental,
        Economico: scoreEconomico,
        Social: scoreSocial,
        Genero: scoreGenero,
    }
    return obj;
  }
//  }


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
    
   



