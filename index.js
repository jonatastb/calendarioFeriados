import retornaProximosFeriados from './retornaFeriados.js';
import imprimeFeriados from './imprimeFeriados.js'
console.log('\nOs próximos feriados, lista completa:\n')
let numeroFeriados = 3;

let proximosFeriados = retornaProximosFeriados(numeroFeriados);
imprimeFeriados(proximosFeriados);