/**
 * 1. Calcular el área y el volumen de la esfera cuyo radio se pide al usuario. 
 * Pide por teclado qué operación se desea calcular.
 */

let radio = 2.5;

area = (Math.PI * 4) * Math.pow(radio,2)
volumen = (4 / 3 * Math.PI) * Math.pow(radio,3)

/**
 * Escriba un algoritmo que lea un instante de tiempo dado en horas y minutos y
 *  escriba como respuesta los mensajes “Buenos días” “Buenas tardes” “Buenas noches”, 
 * de acuerdo con las siguientes reglas:
 *  a. Es de día desde las 7:30 hasta las 14:00 horas.
    b. Es tarde desde las 14:01 hasta las horas 20:30.
    c. Es noche desde las 20:31 hasta las horas 7:29.
 */

/**
 * Para comprobar si un año es o no bisiesto se usa la siguiente regla: 
 * “Un año es bisiesto si es divisible por 400, o bien es divisible por 4 pero no por 100”. 
 * Diseñar un programa que utilizando una variable lógica que tenga valor cierto si el año es bisiesto y falso si no lo es.
 */

anio = 1900;
bisiesto = false;

if (((anio % 4 == 0) && (anio % 100 != 0)) || (anio % 400 == 0)) {
    bisiesto = true; 
}

/**
 * Diseñar un algoritmo para escribir en pantalla los n primeros números naturales, sus cuadrados, sus cubos y la suma de todos ellos.
 */

//for (let i = 0; i < 11; i++) {
//    console.log(i)
//    console.log(Math.pow(i,2))
//    console.log(Math.pow(i,3))
//}

/**
 * Hallar el menor, el mayor y la media de un conjunto de números positivos leídos de teclado.
 */

let mayor = 0, menor = 10000, media = 0;

for (let i = 0; i < 5; i++) {
    //let num = parseInt(prompt("Introduce número"))
    num = 10;
    if (num > mayor) {
        mayor = num;
    } else if (num < menor) {
        menor = num;
    }
    media += num;
}

/**
 * Hacer un algoritmo que lea el número correspondiente a un mes del calendario 
 * y presente en pantalla su nombre usando una estructura de control adecuada.
 */

mes = 12;

switch (mes) {
    case 1:
        mes = "Enero"
        break;
    case 2:
        mes = "Febrero"
        break;
    case 3:
        mes = "Marzo"
        break;
    case 4:
        mes = "Abril"
        break;
    case 5:
        mes = "Mayo"
        break;
    case 6:
        mes = "Junio"
        break;
    case 7:
        mes = "Julio"
        break;
    case 8:
        mes = "Agosto"
        break;
    case 9:
        mes = "Septiembre"
        break;
    case 10:
        mes = "Octubre"
        break;
    case 11:
        mes = "Noviembre"
        break;
    case 12:
        mes = "Diciembre"
        break;
}

/**
 * Realizar un algoritmo que permita introducir la nota de una asignatura por teclado, 
 * la valide para que esté comprendida entre 0 y 10 y se escriba en letras de la siguiente manera:ç
 * 
 *  SUSPENSO si es menor que 5
 *  APROBADO mayor que 5 y menor que 6
 *  BIEN entre 6 y 7
 *  NOTABLE entre 7 y 8
 *  SOBRESALIENTE entre 9 y 10
 */

let nota = 10;
let resultado;
if (nota < 5) {
    resultado = "SUSPENSO"
} else if (nota >= 5 && nota < 6) {
    resultado = "APROBADO"
} else if (nota >= 6 && nota <= 7) {
    resultado = "BIEN"
} else if (nota >= 7 && nota < 9) {
    resultado = "NOTABLE"
} else if (nota >= 9 && nota <= 10) {
    resultado = "SOBRESALIENTE"
}