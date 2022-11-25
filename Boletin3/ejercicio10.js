/**
 * Refactoriza el siguiente código usando funciones flecha.
 *  Asegúrate de que la función se llama tripleAndFilter.
 */


var tripleAndFilter = (arr)=> arr.map((value)= value * 3).filter((value)=>value % 5 === 0)

/**
 * Asegúrate de que la función se llama doubleOddNumbers.
 */

var doubleOddNumbers = (arr) => arr.filter((val) = val % 2 !== 0).map((val) => val *2)

/**
 * Asegúrate de que la función se llama bar
 */

var bar = (arguments) => { 
    let txt = ''; 
    for(let i in arguments){ 
    txt += arguments[i];
    } 
    return txt;
}

console.log(bar("hola que tal"));