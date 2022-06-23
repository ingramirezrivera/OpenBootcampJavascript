
// - La fecha de hoy
let fechaHoy = new Date();
console.log('fechaHoy', fechaHoy);
// - La fecha de tu nacimiento
const fechaNacimiento = new Date(1986, 08, 11);
console.log('fechaNacimiento', fechaNacimiento);
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const comparacion = fechaHoy > fechaNacimiento
console.log('fechaHoy', fechaHoy);
// - Una variable que contenga el día de tu nacimiento
const diaNacimiento = fechaNacimiento.getDate();
console.log('fechaNacimiento', fechaNacimiento);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log('mesNacimiento', mesNacimiento);
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos);
const yearNacimiento = fechaNacimiento.getFullYear();
console.log('anyo', yearNacimiento);