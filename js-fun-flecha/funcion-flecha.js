// ____________________FUNCION TRADICIONAL_______________________ 
function miFuncion(){
    console.log("saludos de mi funcion tradicional")
}
miFuncion();
// ____________________FUNCION ASIGANADA A UNA VARIABLE_______________________ 
let miFuncion2 = function(){
    console.log("saludos de mi funcion asignada a una variable")
}
miFuncion2();
// ____________________FUNCION ASIGANADA A UNA VARIABLE_______________________ 
let miFuncionFlecha = () => {console.log("saludos desde mi funcion flecha") }
miFuncionFlecha();
// ____________________FUNCION ASIGANADA SIN LLAVES_______________________ 

const miFuncionFlecha2 = ()=>console.log("saludos desde mi funcion flecha con una sola linea");
miFuncionFlecha2();

// ____________________FUNCION FLECHA CON RETURN_______________________ 

const miFuncionFlecha3 = ()=>{
    return " saludando con funcion flecha y return"
}
console.log(miFuncionFlecha3());

// ____________________FUNCION FLECHA PARA REGRESAR UN OBJETO_______________________ 

const miFuncionFlecha4 =()=>({nombre:"juan"});
console.log(miFuncionFlecha4());

// ____________________FUNCION FLECHA CON UN SOLO  PARAMETRO_______________________ 
const miFuncionFlecha5 = (mensaje)=>{console.log(mensaje)};
miFuncionFlecha5("funcion flecha con parametros");

// ____________________FUNCION FLECHA CON VARIOS PARAMETROS_______________________ 
const miFuncionFlecha6 = (x,y)=>{suma=x+y
return suma
}
console.log(miFuncionFlecha6(5,6))