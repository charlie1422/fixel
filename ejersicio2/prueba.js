const txtNumero = document.getElementById("numeroJS");
const btnConteo = document.getElementById("botonJS");
const txtSalida = document.getElementById("salidaJS");

btnConteo.addEventListener('click', presionado);

function presionado() {
    const palabraIngresada = txtNumero.value;

    const palabraConvertida = convertirVocales(palabraIngresada);

    txtSalida.innerText = palabraConvertida;
}

function convertirVocales(palabra) {
    return palabra
        .replace(/a/g, 'x')
        .replace(/e/g, 'y')
        .replace(/i/g, 'z')
        .replace(/o/g, 'w')
        .replace(/u/g, 'k');
}
