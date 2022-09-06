
function isPalindrome(texto) {

    if (texto == texto.split("").reverse().join("")) {
        return "El texto es Palindrome"
    } else {
        return "El texto NO es Palindrome"
    }

}

alert(isPalindrome(prompt("Introduce una cadena de texto")))