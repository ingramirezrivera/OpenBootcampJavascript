const nombre = "Daniel";
const apellido = "Ramírez";

const usuario = { 
    nombre: nombre,
    apellido: apellido
};

sessionStorage.setItem("usuario", JSON.stringify(usuario));
localStorage.setItem("usuario", JSON.stringify(usuario));

const date = new Date()
document.cookie = "nombreCaducidad=ususario;expires=${new Date(date.getTime() + 2 * 60000)";