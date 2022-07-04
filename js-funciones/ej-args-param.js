//crea la funcion 
function sumarTodo(){
//nombra la variable que la estar en el ciclo for   
    let suma = 0;
//crea el ciclo for 
    for(let i=0; i < arguments.length; i++){
        suma = suma +arguments[i];
    }
//pide que le devuelta el valor 
    return suma;
}

let resultado = sumarTodo(5, 4, 13, 10, 9, 12, 52);
console.log(resultado);

 