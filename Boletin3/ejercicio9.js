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

//console.log(elMenorFlecha(12,34,5,12))

/**
 * Escribe una función llamada colocaEnMedio que acepte como parámetros dos
 *  arrays y devuelva el primer array con todos los valores 
 * del segundo array colocados en el centro del primer array. 
 */

let array1 = [1,2,6,7]
let array2 = [3,4,5]
let array3 = [1]
let array4 = [3,4,5]


//console.log(colocaEnMedio(array4, array3))

function colocaEnMedio(arr1, arr2) {
    arr1.splice(arr1.length/2,0,...arr2);
    return arr1
}

var colocaEnMedioFlecha = (arr1, arr2) => arr1.splice(arr1.length/2,0,...arr2)
console.log(colocaEnMedioFlecha(array1,array2))

/**
 * Escribe una función llamada uneArrays que acepte un número variable de parámetros
 *  (cada uno de ellos será un array) y devuelva un nuevo array con todos los parámetros concatenados.
 */

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

//console.log(maxDate)
//console.log(minDate)

/**
 * Escribe una función llamada sumaArgPares que sume todos los argumentos pares que se pasen a la función.
Ejemplos:
sumEvenArgs(1,2,3,4) // 6
sumEvenArgs(1,2,6) // 8
 */

function sumArgPares(...params) {
    suma = 0;
    params.forEach(element => {
        resto = element % 2;
        if (resto == 0) {
            suma += element
        }
    });
    return suma;
}

//console.log(sumArgPares(1,2,3,4,5,6,7,8,9,10))