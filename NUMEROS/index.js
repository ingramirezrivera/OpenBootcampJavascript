// - Una variable que contenga tu altura en centímetros (entero)
let alturaCentimetros = 179.5;
// - Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMetros = 17.9;
// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 96.8;
// - Una variable que contenga tu altura en metros redondeada hacia arriba
let  alturaRounded = Math.ceil(alturaCentimetros);
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoRounded = Math.floor(peso);
console.log('pesoRounded', pesoRounded)
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let maxNum = Number.MAX_VALUE;
let maxNum1 = (Number.MAX_VALUE + 1);

if(maxNum === maxNum1){
    console.log('No son iguales');
}else{
    console.log("son iguales");
}
