notas = new Map([
    ["DWEC",6],
    ["DWES",5],
    ["DIW",8],
    ["DAW",9],
    ["EIE",7],
]);

a1 = new Alumno("Flores","Marchitas","12345678A","2000/05/25",2022,notas)
a2 = new Alumno("Pablo","Escobar","12345678B","2005/01/15",2022,notas)

alumnos = new Array();
alumnos.push(a1);
alumnos.push(a2);

aula1 = new Aula(alumnos);
console.log(aula1.busquedaDNI("12345678B"))

