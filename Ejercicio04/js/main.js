
var valores = [true, 5, false, "hola", "adios", 2]

booleanos = valores.filter(valor => typeof valor === "string")
integers = valores.filter(valor => typeof valor === "number")
strings = valores.filter(valor => typeof valor === "string")

// Point 1
console.log("El elemento mayor es: " + (strings[0] > strings[1] ?  strings[0] : strings[1]))

// Point 2
console.log("Los operadores necesarios para obtener el resultado true: ==  " + (booleanos[0] != booleanos[1]))
console.log("Los operadores necesarios para obtener el resultado false: != " + (booleanos[0] == booleanos[1]))

// Point 3
console.log("+ " + (integers[0] + integers[1]))
console.log("- " + (integers[0] - integers[1]))
console.log("* " + (integers[0] * integers[1]))
console.log("/ " + (integers[0] / integers[1]))
console.log("% " + (integers[0] % integers[1]))