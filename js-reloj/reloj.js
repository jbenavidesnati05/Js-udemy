const mostrarReloj =()=>{
    let fecha = new Date;
    let hr =  formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`

    const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    const dias = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDay();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana} ${dia} ${mes}`;
    document.getElementById("fecha").innerHTML = fechaTexto;

    document.getElementById("contenedor").classList.toggle("animar");
}

const formatoHora=(hora)=>{
    if(hora < 10)
        hora = "0"+hora;
        return hora
    }

setInterval(mostrarReloj,1000);
 