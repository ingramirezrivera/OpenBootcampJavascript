import { multiplicacion } from './modulos/controller.js'
import { suma } from './modulos/controller.js'
import chalk from 'chalk';


const sum = suma(4, 12)
console.log(chalk.blue(sum))


const mult = multiplicacion(2, 21)
console.log(chalk.green(mult))


console.log(chalk.red('Hello world!'));
