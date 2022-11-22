/**
 * Escribe una función que reciba como argumento de entrada un array de números y
 *  averigue utilizando métodos del objeto Math cuál es el menor y el mayor de ellos.
 */

let numeros = [12,54,-4,1, 2, 3, 4, 5,25,0]

function mayorMenor(array) {
    let menor = Math.min(...array)
    console.log(menor);
    let mayor = Math.max(...array)
    console.log(mayor)
}

mayorMenor(numeros)