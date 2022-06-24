const myFunction = value => {
    if (value%2 === 0) {
        return  value * 2;
    }
    throw new Error("El valor debe ser par")
}

// const elDoble = miFuncion("a1a")
const num = "8";

try {
    // Código que puede fallar
    const par = myFunction(num)
    console.log(par)
    console.log("Está procesando un numero par")

} catch (e) {
    // En caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`)
    console.error("ERROR!")
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
}
