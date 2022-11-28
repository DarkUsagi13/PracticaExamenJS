/**
 * Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
 */

cadena = "hola buenos dias";
cadena2 = "";
char = "";


for (let i = cadena.length - 1; i >= 0; i--) {
    char = cadena.charAt(i);
    cadena2 += char;
}

console.log(cadena)
console.log(cadena2);