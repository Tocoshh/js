//Crea dos variables: const usuario = "admin"; y const password = "1234";.
//Escribe un if que pregunte si el usuario es === "admin" Y (&&) el password es === "1234".
//Si ambas son verdad, imprime: "Acceso concedido".
//Si no, imprime: "Credenciales incorrectas".
const usuario = "admin";
const password = "1234";
if (usuario === "admin" && password === "1234"){
    console.log("Acceso concedido");
}
else{
    console.log("Credenciales incorrectas");
}