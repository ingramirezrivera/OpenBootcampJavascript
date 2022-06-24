// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
function Fibonacci(num){
	var before = 0;
	var actual = 1;
	var next = 1;

	for(let i = 0; i < num; i++){
		console.log(next)
		before = actual + next;
		actual = next
		next = before
	}
}
// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función
const numero = Fibonacci(10);
console.log(actual);