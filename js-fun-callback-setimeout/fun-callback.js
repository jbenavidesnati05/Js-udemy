
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

