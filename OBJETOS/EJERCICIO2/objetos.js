// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let datosPersonales = [
    {
    id: "1128264974",
    nombre: "Daniel",
    apellidos: "Ramírez Rivera",
    edad: 36,
    email: "ing.ramirezrivera@gmail.com",
    Celular: 3217175346,
    }
]
console.log('datosPersonales', datosPersonales);
// - Una variable que obtenga tu edad a partir del objeto anterior
let edad = datosPersonales.edad;
console.log('edad', edad);
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const amigos = [
    { 
        id: "1128248698",
        nombre: "Andrés ",
        apellidos: "Tobón Puerta",
        edad: 35,
        email: "andrest89@gmail.com",
        Celular: 3859635,
    },
    {
        id: "112584769",
        nombre: "Juan Pablo ",
        apellidos: "Correa Hincapié",
        edad: 33,
        email: "correa@gmail.com",
        Celular: 1254873658,
    },
]
const lista = [ ...datosPersonales, ...amigos ];
console.log('lista', lista);
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
lista.sort((a, b) => a.edad - b.edad)
console.log('lista ordenada por edad', lista)