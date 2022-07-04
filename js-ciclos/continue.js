
//es como pedir un salto cuando halle el valor que queremos evitar 
inicio:
for( var contador = 0; contador<=10; contador++){
    
    if(contador % 2 !==0){
        continue inicio; // pasar a la siguiente iteracion del ciclo 
        console.log(contador);
    }
    else{
        console.log(contador);
    }
}



