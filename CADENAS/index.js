// - Una cadena de texto con tu Nombre
const nombre = "Daniel";
// - Otra cadena de texto con tu Apellido
const apellido = "Ramírez Rivera";
// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let student = nombre.concat(" ", apellido);
// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = student.toLocaleUpperCase();
// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = student.toLocaleLowerCase();
// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let estudianteLength = student.length;
// - Una variable que contenga la primera letra del Nombre
let fisrtLetterName = nombre.charAt(0);
// - Otra variable que contenga la última letra del Apellido
let lastLEtterName = nombre.slice(-1);
// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let eraseBlankSpaces = student.replace(/ /g, "")
// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let searchName = student.includes('Daniel');nombre