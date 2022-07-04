
function miFuncion1(){
    console.log("mi funcion 1")
}

function miFuncion2(){
    console.log("mi funcion 2")
}

miFuncion1();
miFuncion2();

// __________________FUNCION DE TIPO CALLBACK_________________ 

let imp =function imprimir(mensaje){
    console.log(mensaje)
}

// imprimir("llamando funcion imprimir");

function sumar(op1,op2, funcionCallback){
    let res=op1+op2;
    funcionCallback(`Resultado: ${res}`) 
}
sumar(5,3,imp);

// __________________LLAMADO DE FUNCIONES ASINCRONAS setTimeout_________________ 
function miFuncionCallBack(){
    console.log("saludo asincrono despues de 3 segundos")
}
// se pasa como argumento la funcion y el tiempo 
setTimeout(miFuncionCallBack,3000);
// pasando la funcion dentro del setTimeout
setTimeout(function(){console.log("saludo asincrono 2")},5000);
// como una funcion flecha 
setTimeout(()=>console.log("saludo asincrono 3"),2000)
