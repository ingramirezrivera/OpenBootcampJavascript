// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["arroz", "carne", "tomates", "lechuga", "frijoles"];
console.log('listaCompra', listaCompra);

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");
console.log('listaCompra', listaCompra);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log('listaCompra', listaCompra);
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {
        titulo: "Sofia y el encanto",
        director: "Pepe Vanders",
        fecha: "2011"
    },
    {
        titulo: "Marginal",
        director: "Rogger Lorenz",
        fecha: "2007"
    },
    {
        titulo: "Persuación",
        director: " Marlon Degente ",
        fecha: "2003"
    }
];
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const posteriores = peliculas.filter(obj => obj.fecha > 2010);
console.log('posteriores', posteriores)
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(dir => dir.director);
console.log('directores', directores);
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map(obj => obj.titulo);
console.log('titulos', titulos);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat);
const titulosydirectores = directores.concat(titulos);
console.log('titulosydirectores', titulosydirectores)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const titulosydirectores2 = [...titulos,...directores];
console.log('titulosydirectores2', titulosydirectores2);