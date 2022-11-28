let cadena = " ", char = "", contarC = 0, contarñ = 0, contarN = 0;

while (cadena != "ULTIMO") {
    cadena = prompt("Introduce nombre");
    cadena = cadena.toUpperCase();
    char = cadena.charAt(0)
    if (char == "C") {
        contarC += 1;
    } else if (cadena.includes("Ñ")) {
        contarñ += 1;
    }
    contarN += 1;
}

console.log(`Nombres contados: ${contarN}`);
console.log(`Nombres empiezan C: ${contarC}`);
console.log(`Nombres incluyen Ñ: ${contarñ}`);