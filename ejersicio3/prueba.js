let palabraSecreta = ""; // La palabra secreta se ingresará desde el campo de texto
let vidas = 7;
let letrasRestantes = 0; // Variable para contar las letras restantes por adivinar

const txtPalabraIngresada = document.getElementById("palabraIngresada");
const btnAdivinar = document.getElementById("botonAdivinar");
const txtResultado = document.getElementById("resultado");
const txtResultadoGanaste = document.getElementById("resultadoGanaste"); // Nuevo elemento para mostrar "Ganaste"
const txtPalabrasEncontradas = document.getElementById("letrasRestantes"); // Elemento para mostrar el contador
const ahorcado = document.getElementById("ahorcado");

btnAdivinar.addEventListener('click', adivinar);

function adivinar() {
    const letraIngresada = txtPalabraIngresada.value.toLowerCase();
    
    if (letraIngresada.length !== 1 || !/^[a-z]+$/.test(letraIngresada)) {
        txtResultado.innerText = "Ingresa una letra válida.";
        return;
    }

    if (palabraSecreta.includes(letraIngresada)) {
        txtResultado.innerText = "¡Adivinaste una letra!";
        if (palabraSecreta === ocultarPalabra()) {
            txtResultadoGanaste.innerText = "¡Ganaste! La palabra era: " + palabraSecreta;
            txtPalabrasEncontradas.innerText = "Letras restantes: 0";
            btnAdivinar.disabled = true;
        } else {
            letrasRestantes--; // Decrementar el contador de letras restantes
            txtPalabrasEncontradas.innerText = "Letras restantes: " + letrasRestantes;
        }
    } else {
        vidas--;
        txtResultado.innerText = "Incorrecto. Vidas restantes: " + vidas;
        actualizarAhorcado();

        if (vidas === 0) {
            txtResultado.innerText = "Perdiste. La palabra era: " + palabraSecreta;
            btnAdivinar.disabled = true;
        }
    }

    txtPalabraIngresada.value = "";
}

function actualizarAhorcado() {
    ahorcado.className = "ahorcado-" + (7 - vidas);
}

const txtPalabraSecreta = document.getElementById("palabraSecreta");
const btnComenzar = document.getElementById("botonComenzar");

btnComenzar.addEventListener('click', comenzarJuego);

function comenzarJuego() {
    palabraSecreta = txtPalabraSecreta.value.toLowerCase();
    letrasRestantes = palabraSecreta.replace(/ /g, '').length; // Contar letras de la palabra secreta
    vidas = 7;
    btnAdivinar.disabled = false;
    txtResultado.innerText = "";
    txtResultadoGanaste.innerText = ""; // Limpiar mensaje de "Ganaste"
    txtPalabrasEncontradas.innerText = "Letras restantes: " + letrasRestantes; // Reiniciar el contador de letras restantes
    ahorcado.className = "ahorcado-0";
    txtPalabraSecreta.value = "";
}

function ocultarPalabra() {
    return palabraSecreta.split('').map(letra => (letra === ' ') ? ' ' : '_').join(' ');
}
