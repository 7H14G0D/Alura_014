const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "12345678901",
  email: "andre@dominio.com",
}

//console.log(cliente)//retorno de todos os dados

//console.log(cliente.nome)//retorno apenas do nome usando .nome

//retorno personalizado
console.log(`O nome do cliente é ${cliente.nome} e ele tem ${cliente.idade} anos`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);