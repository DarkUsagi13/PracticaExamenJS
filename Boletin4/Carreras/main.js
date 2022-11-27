p1 = new Piloto("Leon","McLaren");
p2 = new Piloto("Angel","Alfa Romeo");
p3 = new Piloto("Angel","Alfa Romeo")
p4 = new Piloto("Carlos","Volkswagen")

s1 = new Sesion(p1,10000)
s2 = new Sesion(p2,7000)
s3 = new Sesion(p3,14000)
s4 = new Sesion(p4,8000)

arrS = new Array();
arrS.push(s1)
arrS.push(s2)

//let ordenarNombre = arrS.sort((a,b) => a.piloto.nombre.localeCompare(b.piloto.nombre))

//console.log(ordenarNombre)

//let  ordenarTiempos = arrS.sort((a,b) => a.tiempo - b.tiempo).reverse();

//console.log(ordenarTiempos)


function comprobarSesion(arrSesiones, sesion) {
    let estado;
    busqueda = arrSesiones.find(s => s.piloto.nombre == sesion.piloto.nombre)
    if (busqueda != undefined) {
        estado = true
    } else {
        estado = false
    }
    return estado
}

function creaSesion(arrSesiones,sesion) {
    if (comprobarSesion(arrSesiones,sesion)) {
        tiempo = arrSesiones.find(s => s.tiempo < sesion.tiempo)
        if (tiempo != undefined) {
            busqueda.tiempo = sesion.tiempo;
        }
    } else {
        arrSesiones.push(sesion)
    }
    return arrSesiones
}

function borrarSesion(arrSesiones, sesion) {
    if (comprobarSesion(arrSesiones,sesion)) {
        let indice = arrSesiones.indexOf(arrSesiones.find(s => s == sesion))
        arrSesiones.splice(indice, 1)
        return arrSesiones
    } else {
        return "Sesión no existe"
    }
}

function ordenar(arrSesiones) {
    arrSesiones.sort((a,b) => a.piloto.nombre.localeCompare(b.piloto.nombre));
    return arrSesiones;
}

console.log(ordenar(creaSesion(arrS,s4)))

//console.log(borrarSesion(arrS,s1))