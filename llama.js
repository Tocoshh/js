const evaluarllamada = (duracionMinutos , ClienteEnojado) => {
    if( ClienteEnojado === true && duracionMinutos > 10){
        return ("Alerta roja: Pasar a supervisor inmediatamente.");
    }
    else if (duracionMinutos < 3 ){
        return ("Llamada rápida, excelente métrica.");
    }
    else {
        return ("Llamada estandar");
    }
}
console.log(evaluarllamada(12,true));
console.log(evaluarllamada(2,false));