let intentos = 1;
let veces = 'vez';
let maxIntentos = 4; 
let numeroMax = 12;
let numeroMin = 1;
let numeroAleatoruio;
let listaNumeros =[]
let inputElement = document.getElementById('valorUsuario');
inputElement.min = numeroMin;
inputElement.max = numeroMax;

function numeroale() {
    numeroAleatoruio = Math.floor(Math.random() * numeroMax) + numeroMin;
    document.querySelector('.container__botonr').removeAttribute('id')

    if (listaNumeros == numeroMax) {
        asignarTextoElemento('p','Ya se se usaron todos los números posibles')
    }
    else{
    if (listaNumeros.includes(numeroAleatoruio)) {
        return numeroale()
    }
    else{
        listaNumeros.push(numeroAleatoruio)
        return numeroAleatoruio;
    }
    }
}

numeroale()
console.log(numeroAleatoruio);




function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (isNaN(numeroUsuario)) {
        asignarTextoElemento('p', 'Ingresa un valor válido');
        return;
    }

    if (numeroUsuario === numeroAleatoruio) {
        asignarTextoElemento('p', `Adivinaste es el número ${numeroAleatoruio}. ¡Lo conseguiste en ${intentos} ${veces}!`);
        document.querySelector('.container__botonr').setAttribute('id' ,'reiniciar')
        document.getElementById('reiniciar').removeAttribute('disabled')
        document.getElementById('intento').setAttribute('disabled','true')
        document.getElementById('intento').removeAttribute('id')
    } else {
        if (numeroUsuario > numeroAleatoruio) {
            asignarTextoElemento('p', 'El número a adivinar es más pequeño.');
        } else if (numeroUsuario < numeroAleatoruio) {
            asignarTextoElemento('p', 'El número a adivinar es más grande.');
        }
        intentos++;
        limpiarCaja()
        veces = 'veces';
        if (intentos > maxIntentos) {
            asignarTextoElemento('p', `Llegaste al número máximo de ${maxIntentos} intentos. El número era ${numeroAleatoruio}.`);
            document.querySelector('.container__botonr').setAttribute('id' ,'reiniciar')
            document.getElementById('reiniciar').removeAttribute('disabled')
            document.getElementById('intento').setAttribute('disabled','true')
            document.getElementById('intento').removeAttribute('id')
        }
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    veces = 'vez'
}

function reiniciarJuego(){
    limpiarCaja()
    asignarTextoElemento('p', `Selecciona un número del ${numeroMin} al ${numeroMax}`);
    numeroale()
    intentos=1
    document.querySelector('.container__botoni').setAttribute('id','intento')
    document.getElementById('intento').removeAttribute('disabled')
    console.log(numeroAleatoruio);
}





