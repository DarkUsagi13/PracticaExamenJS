class Aula{
    constructor(arrAlumnos) {
        this.arrAlumnos = arrAlumnos;
    }

    busquedaDNI(dni) {
        let busqueda = this.arrAlumnos.find(alumno => alumno.dni === dni);
        return busqueda;
    }

}