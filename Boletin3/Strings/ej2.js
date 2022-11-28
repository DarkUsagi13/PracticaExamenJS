cadena = "Hoy es un buen día  para vivir y comer"
variosBlancos = /[ ]+/g
cadena = cadena.replace(variosBlancos," ")
contarpalabras = cadena.split(" ")
console.log(contarpalabras.length)