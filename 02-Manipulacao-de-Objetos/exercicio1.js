/* [ EXERCÍCIO ]
Digamos que você precise criar a estrutura de um novo objeto para representar uma pessoa estudante no sistema de uma universidade com os seguintes campos:
Nome: um campo de texto com o nome completo do estudante;
Matrícula: um número inteiro;
Curso: um campo de texto contendo o curso atual do estudante;
Matérias: um conjunto de textos contendo apenas os nomes das matérias que o estudante está cursando.
*/


const estudante = {
    nome: "Adilson Josué de Freitas",
    matricula: 201542290,
    curso: "Engenharia eletrônica",
    materias: [
      "Cálculo 1",
      "Álgebra Linear",
      "Práticas de Laboratório",
      "Metodologia",
    ],
  };

  console.log(estudante)