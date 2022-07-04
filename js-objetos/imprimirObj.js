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

// IMPRIMIR OBJETOS 
// concatenando
document.write(persona.nombre+ " "+persona.apellido)

// metodo for in 
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])
}
//metodo object

let personaArray = Object.values(persona)
console.log(personaArray)

let personaString = JSON.stringify(persona);