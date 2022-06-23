
// - Una función sin parámetros que devuelva siempre "true"
function sinparametros(){
    console.log("hi")
    return true;
}

sinparametros();

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const mifuncion = () => {
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola soy una promesa");
        }, 5000);
    });
}
mifuncion();

// - Una función generadora de índices pares automáticos

function* generaId() {
    let id = 0;
    while(true) {
        id++
        if (id%2 == 0) {
            yield id
        }
        
    }
}

const gen = generaId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)