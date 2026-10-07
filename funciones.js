// La Máquina de Saludos (Tradicional)
//Escribe una función clásica llamada saludar que reciba un parámetro llamado nombre.
//La función debe hacer un return de: "Hola, " + nombre + " ¡Bienvenido al sistema!".
//Llama a la función dos veces dentro de un console.log(): una pasándole "Jordan" y 
// otra pasándole "Papá".

function saludar(nombre){ //el nombre de la funcion se llama saludar
    return "Hola," + nombre + "!Bienvenido al sistema!";
}
console.log(saludar("Jordan"));
console.log(saludar("Papá"));
