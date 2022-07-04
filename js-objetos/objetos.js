// creacion del objeto 

let persona={
    nombre : "juan",
    apellido: "perez",
    email :"jperez@gmail.com",
    edad: 28,
    //METODOS=FUNCIONES A OBJETOS 
    nombreCompleto: function(){
        return this.nombre +' '+ this.apellido;
    }
}

// AGREGAR UNA PROPIEDAD
persona.tel = "151313513"
// CAMBIAR  UNA PROPIEDAD
persona.tel = "6666666"
console.log(persona);
// ELIMINAR UNA PROPIEDAD

 delete persona.tel;

 console.log(persona);



// RECORRER OBJETO CON EL FOR IN 
// for in 
// for(nombrePropiedad in persona){
//     console.log(nombrePropiedad)
    // console.log(persona[nombrePropiedad])


// }


// console.log(persona.nombreCompleto())
// acceder al objeto como si fuera un arreglo 
// console.log(persona["apellido"]);


// console.log(persona.nombre );
// console.log(persona.edad );
// console.log(persona.apellido );
// console.log(persona.email );
// console.log(persona.nombreCompleto())
// console.log(persona);





