let listaNumerica = [1,2,10];
let lista1 =[1,2,3];
//7
maximoMinimo(lista1);
function maximoMinimo(list) {
    let mayor = list[0];
    let menor = list[0];

    for( let i = 1; i < list.length; i++){
        if(list[i] > mayor){
            console.log(`Prueba de iterador 2: ${i}`);
            mayor = list[i];
        }
        if(list[i] < menor){
            console.log(`Prueba de iterador 5: ${i}`);
            menor = list[i];
        }
    }
    return console.log(`El numero mayor es: ${mayor}. El numero menor es: ${menor}`);
}


//8
sumaListas(listaNumerica);

function sumaListas(lista) {
    let i = 0;
    let suma = 0;
    let tvec = parseInt(lista.length);
    while(i < tvec){
        suma = suma + parseInt(lista[i]);
        console.log(suma);
        i++;
    }
    return console.log(`La SUMA es: ${suma}`);
}

//9
buscador('10');
function buscador(n) {
    let i = 0;
    //let iter = listaNumerica.values('10');
    //console.log(listaNumerica['10']);
    while(i <= listaNumerica.length){
        //console.log(`Prueba de iterador 1: ${i}`);
        if(listaNumerica.includes(n)){
            //console.log(`Prueba de iterador 2: ${i}`);
            if(listaNumerica[n] == listaNumerica[i]){
                //console.log(`Prueba de iterador 3: ${i}`);
                return console.log(`Esta en la posicion: ${i-1}`);
            }
            //      console.log(`Prueba de iterador 4: ${i}`);
            i++;
        }else{
            return console.log(`El valor: ${n} no esta en la lista`);
        }
    }
}

//10

let lista2 =[1,2,3];

mismoTamano(lista1,lista2);
function mismoTamano(list1,list2) {
    if(list1.length === list2.length){
        let i = 0;
        let j = 0;
        let newList = [];
        while(i < list1.length && j < list2.length){
            //console.log(`Prueba de iterador 1: ${i}`);
            //console.log(`Prueba de lista 1: ${newList}`);
            newList.push(parseInt(parseInt(list1[i]) + parseInt(list2[j])));  
            //console.log(`Prueba de lista 2: ${newList}`);
            j++;
            i++;
            //console.log(`Prueba de iterador 2: ${i}`);
        }
        //console.log(`Prueba de lista 4: ${newList}`);
        return console.log(`La nueva lista es: ${newList}`);
    }
}

//11
listaAlCuadrado(lista1);
function listaAlCuadrado(list) {
    let i = 0;
    let newList = [];
    while(i < list.length){
        newList.push(parseInt(parseInt(list[i]) * parseInt(list[i])));
        i++;
    }
    return console.log(`La nueva lista es: ${newList}`);
}