class Piloto{
    constructor(nombre,escuderia) {
        this.nombre = nombre;
        this.escuderia = escuderia;
    }

    nombre(){
        return this.nombre;
    }

}

class Sesion{
    constructor(piloto,tiempo) {
        this.piloto = piloto;
        this.tiempo = tiempo;
    }

    tiempo() {
        return this.tiempo;
    }

}

p1 = new Piloto("Pedro","McLaren");
p2 = new Piloto("Pablo","Alfa Romeo");

sesion1 = new Sesion(p1,5000)
sesion2 = new Sesion(p2,7000)

arrS = new Array();
arrS.push(p1)
arrS.push(p2)


console.log(arrS.sort(a,b))