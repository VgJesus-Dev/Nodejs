// Importando dados de pessoas
//const executePessoas = require('./pessoas');

//console.log(executePessoas.pessoas, executePessoas.idade);

//  Desestruturação 
const {pessoas, idade} = require ('./pessoas');
console.log(pessoas, idade); //um código mais limpo, faz a mesma coisa que em cima.

//Descobrindo informações sobre o sistema operacional
const sistemaOperacional = require('os');
//console.log(sistemaOperacional);
console.log(sistemaOperacional.platform(), sistemaOperacional.homedir());