let cadena = " ", cambio = "", formato;
let regExp1 = /^@/
let regExp = /^@[a-zA-Z]{7}[0-9]{3}$/;

while (cadena != "") {
    cadena = prompt("Introduce nombre de usuario")
    //cadena = "hola";
    if (cadena.indexOf("@",0)) {
        cambio = "@"+cadena;
        formato = cambio.slice(0,2) + "_" + cambio.slice(2,8) + "_" + cambio.slice(8);
        console.log(formato)
        cambio = "";
        formato = "";
    } else {

    }
    
}
var txt1 = "foo baz"
var txt2 = txt1.slice(0, 3) + "bar" + txt1.slice(3);
console.log(txt2)