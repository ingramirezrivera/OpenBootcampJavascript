const nombre = "Daniel";
const apellido = "Ramírez";

const usuario = { 
    nombre: nombre,
    apellido: apellido
};

sessionStorage.setItem("usuario", JSON.stringify(usuario));
localStorage.setItem("usuario", JSON.stringify(usuario));



let date = new Date(); 
let minutes = 2; 
date.setTime(date.getTime() + (minutes * 60 * 1000));
console.log(date.setTime(date.getTime() + (minutes * 60 * 1000)));


document.cookie = "nombreCaducidad=ususario;expires=" + new Date(date).toUTCString()