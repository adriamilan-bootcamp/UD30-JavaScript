
function parOimpar(numero) {
    if(numero % 2 == 0) {
        return "El numero " + numero + " es par"
    } else {
        return "El numero " + numero + " es impar"
    }
}

alert(parOimpar(prompt("Introduce un numero")))