// creacion del objeto 

//  Metodo get ===> obtener 
//  Metodo set ===> 
let persona={
    nombre : "juan",
    apellido: "perez",
    email :"jperez@gmail.com",
    edad: 28,
    idioma:"us",
    
    //METODOS=FUNCIONES A OBJETOS USANDO GET
    get nombreCompleto(){
        return this.nombre +' '+ this.apellido;
    },
    

    //USAR METODO GET PARA PASAR "us"  a mayusculas

    get lang(){
        return this.idioma.toUpperCase()
    },

    set lang(lang){
        return this.idioma=lang.toUpperCase();
    }
}

console.log(persona.lang);
persona.lang = "mex"
console.log(persona.lang);
console.log(persona.idioma);




