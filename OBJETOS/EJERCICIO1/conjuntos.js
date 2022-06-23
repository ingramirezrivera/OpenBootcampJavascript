// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia
const familia = ["Hector", "Marta", "Felipe", "Ana", "Pablo", "Daniel"];

const setFamilia = new Set(familia);
console.log('setFamilia', setFamilia);
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

setFamilia.add("Daniel");
console.log('setFamilia duplicnado nombre', setFamilia);
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFamilia.add("Javascript");
console.log('setFamilia añadiendo Javascript', setFamilia);