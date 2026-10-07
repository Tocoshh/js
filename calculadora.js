//La Calculadora de Precios (Arrow Function)
//Crea una Arrow Function llamada calcularIGV que reciba un precio.
//Debe retornar ese precio multiplicado por 0.18.
//Llama a la función pasándole el número 100 e imprímela. (Debería salirte 18).
const  calcularIGV = (precio) => {
    return precio * 0.18;
}
console.log(calcularIGV(100));