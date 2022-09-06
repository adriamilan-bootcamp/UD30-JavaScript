
function upperLowerCase(texto) {

    upperCase = false
    lowerCase = false

    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i).match(/[a-z]/)) {
            lowerCase = true
        } else if(texto.charAt(i).match(/[A-Z]/)) {
            upperCase = true
        }
    }

    if (upperCase && lowerCase) {
        return "El texto contiene Minusculas y Mayusculas"
    } else if (lowerCase) {
        return "El texto contiene Minusculas"
    } else if (upperCase) {
        return "El texto contiene Mayusculas"
    }

}

alert(upperLowerCase(prompt("Introduce una cadena de texto")))