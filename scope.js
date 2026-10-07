//Rompiendo el Scope (Para ver el error)
//Crea una función cualquiera.
//Dentro de la función, escribe: let secreto = "Contraseña123";
//Fuera de la función, al final de tu archivo, intenta imprimirla: console.log(secreto);
//Corre node funciones.js y lee el error. (Te dirá que secreto is not defined).
//  ¡Tu computadora acaba de proteger tu memoria!
const computadora = () => {
    let secreto = "Contraseña123";
}
console.log(secreto);