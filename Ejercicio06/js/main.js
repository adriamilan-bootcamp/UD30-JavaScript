var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

var dni = prompt("Introduce tu dni");

if (dni > 0 && dni < 99999999) {

    usuarioLetra = prompt("Introduce la letra de tu dni").toUpperCase()
    letra = letras[dni%23]

    if (usuarioLetra == letra) {
        alert("La letra que has introducido y la calculada coinciden.")
    } else {
        alert("La letra introducida no es la correcta.")
    }

} else {
    alert("DNI Introducido no válido.")
}
