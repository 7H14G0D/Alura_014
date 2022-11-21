const clientes = require("./01-clientes.json");

//console.log(clientes);

//                 [1]     [2]    [3]
function encontrar(lista, chave, valor) {
  return lista.find((item) => item[chave].includes(valor));
}

//                             [1]      [2]      [3]
const encontrado = encontrar(clientes, "nome", "Kirby");

console.log(encontrado);