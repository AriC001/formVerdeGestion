let numbers = []
for(let i = 0; i<2;i++){
    numbers.push(i);
}

let formulario = document.getElementsByTagName("form")
let section = document.getElementsByTagName("section")
let sectionMax = 0

let sectionCount = 0;

let scoreTotal = 0;
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
    console.log(scoreTotal);
    section[sectionCount].style.display = "none"
    if(sectionCount == section.length-1){
        section[sectionCount].style.display = "none"
        alert("Congrats")
    }else{
        sectionCount++;
        section[sectionCount].style.display = "block"
    }
    
  }

  function intToChar(int) {
    // 👇️ for Uppercase letters, replace `a` with `A`
    const code = 'a'.charCodeAt(0);
    //console.log(code); // 👉️ 97
  
    return String.fromCharCode(code + int);
  }