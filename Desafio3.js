imc(1.62,62);
factorial(1);
conversion(10);
areaPerimetro(10, 5);
areaCirculo(10);
tablaMultiplicar(7);


//Sacar el imc
function imc(altura, peso) {
    return console.log(`Tu IMC es: ${parseFloat(peso / (altura*altura))}`);
}

//Sacar factorial de cualquier numero
function factorial(n) {
    let resultado = 1;
    let i = 1;
    while(i < n){
        resultado = resultado * (i+1);
        //console.log(`El numero: ${i} por el numero ${parseInt(i+1)} es: ${resultado}`);
        i++;
    }
    return console.log(`El factorial de el numero ${n} es: ${resultado}`);
}

//Dolar a Real(moneda brazileña)
function conversion(dolar){
    return console.log(parseFloat(dolar * 4.92));
}

//Area y perimetro de una sala rectangular
function areaPerimetro(ancho, largo){
    let area =  console.log(`El area de la sala rectangular es de: ${parseFloat(ancho * largo)}`);
    let perimetro = console.log(`El perimetro de la sala rectangular es de: ${parseFloat((ancho*2) + (largo * 2))}`);
    return area, perimetro;
}

//Area de una sala circular
function areaCirculo(radio) {
    return console.log(`El area de la sala circular es de: ${parseFloat(Math.PI * (radio * radio ))}`);
}

//Tabla de multiplicar de cualquier numero
function tablaMultiplicar(n) {
    let i = 1
    while(i <= 10){
        console.log(`${i} x ${n} = ${parseInt(i * n)}`);
        i++;
    }
    return;
}