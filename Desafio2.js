function holaMundo() {
    console.log("HOLA MUNDO");
    return;
}

function nombre(nombre){
    console.log(`Hola ${nombre}!!!!`);
    return;
}

function numero(numero) {
    console.log(parseInt(numero*numero));
    return;
}

function numeros(numero1, numero2, numero3) {
    let prom = (numero1+numero2+numero3) / 3;
    console.log(`El promedio de: ${numero1} + ${numero2} + ${numero3} es: ${prom}`);
    return;
}

function mayorMenor(n1,n2) {
    console.log(n1 > n2 ? `El numero mayor es: ${n1}`:`El numero mayor es: ${n2}`);
    return;
}

function pow(n) {
    console.log(parseInt(n*n));
    return;
}

holaMundo();
nombre("Juan");
numero(2);
numeros(10,10,10);
mayorMenor(20,4);
pow(5);