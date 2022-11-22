/**
 * Escribe una función llamada elMenor que acepte un número variable de parámetros y 
 * devuelva el parámetro de menor valor pasado a la función.
 */

function elMenor(...num) {
    let menor = Math.min(...num);
    return menor;
}

console.log(elMenor(12,23,42,7))

let elMenorFlecha = (...num) => Math.min(...num);

console.log(elMenorFlecha(12,34,5,12))

/**
 * Escribe una función llamada colocaEnMedio que acepte como parámetros dos
 *  arrays y devuelva el primer array con todos los valores 
 * del segundo array colocados en el centro del primer array. 
 */

let array1 = [1,2,6,7]
let array2 = [3,4,5]
let array3 = [1]
let array4 = [3,4,5]

//colocaEnMedio(array4, array3)

function colocaEnMedio(array1, array2) {
    return array1.splice(3,0,...array2);
}

let arr1 = [1,2], arr2 = [3,4], arr3 = [5,6]

uneArrays(arr1, arr2, arr3)

function uneArrays(arra1,arr2,arr3) {
    union = arra1.concat(arr2).concat(arr3)
    return union;
}

var dates=[];
dates.push(new Date("2011/06/25"))
dates.push(new Date("2011/06/26"))
dates.push(new Date("2011/06/27"))
dates.push(new Date("2011/06/28"))
var maxDate=new Date(Math.max.apply(null,dates));
var minDate=new Date(Math.min.apply(null,dates));

console.log(maxDate)
console.log(minDate)