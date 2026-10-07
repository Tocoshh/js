//Cuenta Regresiva de Despegue (while)
//Crea una variable let segundos = 5;.
//Crea un bucle while que se ejecute mientras segundos > 0.
//Dentro del bucle imprime: "Despegue en: " + segundos.
//Regla de vida: ¡Asegúrate de poner segundos--; adentro! (Si no le restas, 
//la condición siempre será verdadera y crearás un bucle infinito que colgará tu proceso en la terminal).
//Fuera del bucle, al final, pon: console.log("¡Despegue exitoso!");.
let segundos = 5;
while (segundos >0 ){
    console.log("Despegue en: " + segundos);
    segundos--;
}
console.log("!Despegue exitoso!");