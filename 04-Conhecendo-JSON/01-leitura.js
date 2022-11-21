/* Puxando conteudo de outro arquivo e mostrando no terminal*/

const dados = require("./01-cliente.json");

console.log(dados);

console.log(typeof dados); /* Mostrando qual o tipo */

/* 
[Stringficação]
Existe uma maneira de escrever um texto no formato JSON 
a partir de um objeto JavaScript comum 
*/

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString); /* Mostrando qual o tipo */

/* Impossivel acessar um objeto em uma string .JSON dessa forma */
console.log(clienteEmString.nome);

/* Transformando a string em objeto para poder acessar */
const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);
