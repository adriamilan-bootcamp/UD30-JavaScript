numero = prompt("Introduce un numero entero.");

for (let i = numero - 1; i > 1; i--) {
    numero *= i;
}

alert("El factorial es " + numero);