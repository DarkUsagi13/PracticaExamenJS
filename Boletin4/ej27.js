/**Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. clase Persona)*/

let notas = new Map();
notas.set("DWEC",7)
notas.set("DWES",5)
notas.set("DAW",9)
notas.set("DIW",9)
notas.set("EIE",8)

class Persona{
    constructor(nombre,apellido,dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
}

/**
 * 28 - Crear un clase Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. 
 * Crear su constructor y un método para imprimir un Alumno, otro que devuelva la nota media y 
 * otro para obtener su mejor nota y el nombre del módulo con esa nota (puede tener la misma nota en varios módulos).
 */

class Alumno extends Persona{
    constructor(nombre,apellido,dni,curso,notas) {
        super(nombre,apellido,dni)
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.curso = curso;
        this.notas = notas;
    }

    notaMedia() {
        let media = 0;
        for (let valores of this.notas.values()) {
            media += valores;
        }
        return media / this.notas.size;
    }

    devolverDNI() {
        return this.dni;
    }

}

let a1 = new Alumno("Elvis","Tek","12345678A","2022",notas);
let a2 = new Alumno("Susana","Oria","12345678B","2022",notas);
let a3 = new Alumno("Marchita","Flores","12345678C","2022",notas);
let a4 = new Alumno("Elton","Tito","12345678D","2022",notas);

let alumnos = new Array();
alumnos.push(a1);
alumnos.push(a2);
alumnos.push(a3);
alumnos.push(a4);

//console.log(alumnos)

/**
 * Crear un objeto Aula que contenga los alumnos de un aula y tenga los siguientes métodos:
        buscar un alumno del aula por DNI.
        ordenar por nota para un alumno en particular
        ordenar el array de alumnos por apellido
        imprimir los alumnos de un aula. 
 */

class Aula {
    constructor(alumnosArray) {
        this.alumnosArray = alumnosArray;
    }

    busquedaDNI(dni) {
        let busqueda;
        for (let alumno of this.alumnosArray) {
            if (alumno.devolverDNI() == dni) {
                busqueda = alumno;
            }
        }
        return busqueda;
    }

    ordenarNotas(dni) {
        let busqueda, notasOrdenadas = new Map();
        busqueda = this.busquedaDNI(dni)
        notasOrdenadas = [...busqueda.notas].sort((a, b) => String(a[1]).localeCompare(b[1]))
        return notasOrdenadas
    }

}

let aula1 = new Aula(alumnos);

console.log(aula1.ordenarNotas("12345678D"));

 //https://stackoverflow.com/questions/31158902/is-it-possible-to-sort-a-es6-map-object