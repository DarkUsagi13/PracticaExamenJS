let num = 6; estado = false;
function esPerfecto(num) {
    let divisores, suma = 0;
    for (let i = 0; i < num - 1; i++) {
        divisores = num % i;
        console.log(divisores)
        if (divisores == 0) {
            suma += i;
            console.log(suma)
        }
    }
    return suma;
}


if (num == esPerfecto(num)) {
    estado = true;
    console.log(estado)
}
