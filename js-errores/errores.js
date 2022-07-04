"use strict"

// try{

//     x=10; 
// }

// catch(error){
// console.log(error);
// }


// finally{
//  console.log("termina la revision de errores")
// }

// console.log("continuamos mis perros .....");
// ___________________________________________________________________ 

let resultado = "-5"; 

try{
    if(isNaN(resultado)) throw "no es un numero"
    else if(resultado ==="") throw "es una cadena vacia"
    else if(resultado >=0) throw "positivo"
    else if(resultado <=0) throw "negativo"


}
catch(error){
console.log(error);
// console.log(error.name);
// console.log(error.message);


}
finally{
console.log("termina revision de errores");

}