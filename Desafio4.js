let listaNumerica = ['10','10','10'];
let listaMaximoMinimo = ['12','2','3','4','33','6','7','8','9','10'];

//1
let listaGenerica = [];
console.log(listaGenerica);
//2
let lenguajesDePropramacion = ['JavaScript', 'C','C++','Kotlin','Python'];
console.log(lenguajesDePropramacion);
//3
lenguajesDePropramacion.push('Java','Ruby','GoLang');
//4
console.log(lenguajesDePropramacion);
//5
let reversa = lenguajesDePropramacion.reverse();
console.log(reversa);
//6
promedio(listaNumerica);
function promedio(lista){
    let i = 0;
    let contador = 0;
    let tvec = parseInt(lista.length);
    //console.log(tvec);
    while(i < tvec){
        //Hacemos suma de cada valor de el array
        contador = contador + parseInt(lista[i]);
        //console.log(contador);
        i++;
    }
    //console.log(contador);
    //hacemos division entre la cantidad de valores de el array
    let promedio = contador / tvec;
    return console.log(`El promedio es: ${promedio}`);
}


//7 INCOMPLETO
//maximoMinimo(listaMaximoMinimo);
/*function maximoMinimo(lista) {
    let i = 0;
    let maximo = 0;
    let minimo = 0;
    let tvec = parseInt(lista.length);
    //console.log(tvec);
    while(i <= tvec){
        if(parseInt(lista[i]) > parseInt(lista[i+1])){
            maximo = lista[i];
            console.log(maximo);
        }
        if(parseInt(lista[i]) < parseInt(lista[i+1])){
            minimo = lista[i];
            console.log(minimo);
        }
        i++;
    }
    return console.log(`El Maximo es: ${maximo}. El minimo es: ${minimo}`);
}

//8
sumaListas(listaNumerica);
function sumaListas(lista) {
    let i = 0;
    let suma = 0;
    let tvec = parseInt(lista.length);
    while(i <= tvec){
        suma = suma + parseInt(lista[i]);
        i++;
    }
    return console.log(`La SUMA es: ${suma}`);
}*/
