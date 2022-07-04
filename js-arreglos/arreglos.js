
// FORMA VIEJA 
let autos = new Array('bmw','mb','volvo');
document.write(autos);

// salto de linea
document.write("<br>");

// FORMA NUEVA
const autos2= ['bmw','mb','volvo'];
document.write(autos);

// salto de linea
document.write("<br>");

//acceder a un elemento del array 
document.write("<br>");
document.write(autos[0]);

document.write("<br>");
document.write(autos[1]);

document.write("<br>");
document.write(autos[2]);

document.write("<br>");


for(let i=0; i<autos.length;i++){
    document.write(`Item del arreglo ${i} ${autos[i]}`)
    document.write("<br>");


}