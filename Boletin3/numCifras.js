var num = "123456789", longitud;

function numCifras(num) {
    longitud = [...num].length;
    return longitud;
}

console.log(numCifras(num))