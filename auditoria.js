const stockLaptop = [10,25,5,12];
const calcularTotalInventario = (arrayDeNumeros)=>{
    let total = 0;
    for (let i=0 ;i <arrayDeNumeros.length ; i++){
        total = total + arrayDeNumeros[i];
    }
    return total;
}
console.log( calcularTotalInventario(stockLaptop) );