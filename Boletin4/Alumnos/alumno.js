class Alumno extends Persona{
    constructor(nombre,apellido,dni,fecha_nac,curso,notas) {
        super(nombre,apellido,dni,fecha_nac)
        this.notas = notas
        this.curso = curso;
    }

    dni() {
        return this.dni;
    }

    notaMedia () {
        let suma = 0;
        for (let nota of this.notas.values()) {
            suma += nota;
        }
        return  suma / this.notas.size;
    }
}