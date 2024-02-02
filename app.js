let listaNumerosSorteados = [];
let numeroSecreto = 0;
let intentos = 1;
let numeroMaximo = 10;


coindicionesIniciales();
function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario); 
    console.log(typeof(numeroSecreto));
    //El triple igual verifica tipo de datos. False si no son iguales
    console.log(numeroDeUsuario === numeroSecreto);*/
    console.log(`Attend: ${intentos}`);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");
        }else{
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    //Para capturar el id se usa el # antes de poner el valor del id
    //Aun asi se puede usar con getDocumentId
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    //console.log(listaNumeroSorteado);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo ){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles.');
    }else{
    //Si el numero generado esta incluido en la lista

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    coindicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function coindicionesIniciales() {
    asignarTextoElemento("h1","Juego del numero secreto!");
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(`No. Secreto: ${numeroSecreto}`);
    intentos = 1;
}

