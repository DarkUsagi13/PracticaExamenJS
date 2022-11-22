
function sumParams(...params) {
    suma = 0;
    for (let i in params) {
        suma += params[i];
    }
    return suma;
}

console.log(sumParams(1,2,3,4,5))