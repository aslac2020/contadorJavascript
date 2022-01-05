

function fazerConta(){
    
    let numInicio = document.getElementById('inicio');
    let numFim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let mens = document.getElementById('msg');

    if( numInicio.value.length == 0 || numFim.value.length == 0 || passo.value.length == 0){
        mens.innerHTML = "Impossivel contar :("
    }
    else{
        mens.innerHTML = "Contando: <br> "
        let i = Number(numInicio.value);
        let f = Number(numFim.value);
        let p = Number(passo.value)
        if(p <= 0 ){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            for(let c= i ; c <= f; c += p){
                mens.innerHTML += ` ${c} \u{1F449} `
            }
        } else{
            for(let c= i ; c >= f; c -= p){
                mens.innerHTML += ` ${c} \u{1F449} `
            }
        }
        mens.innerHTML += `\u{1F3C1}`

    }


}


