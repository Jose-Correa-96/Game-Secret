let numeroSecreto;
let intentos = 0;
let listaNumerosSorteados = [];
const numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    intentos++;
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('.texto_parrafo', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('.texto_parrafo', 'El número secreto es menor');
        } else {
            asignarTextoElemento('.texto_parrafo', 'El número secreto es mayor');
        }
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('.texto_parrafo', 'Ya se sortearon todos los números posibles');
        return null;
    }
    
    let numeroGenerado;
    do {
        numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    } while (listaNumerosSorteados.includes(numeroGenerado));

    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto!');
    asignarTextoElemento('.texto_parrafo', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
    listaNumerosSorteados = [];
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
}

document.addEventListener('DOMContentLoaded', condicionesIniciales);
