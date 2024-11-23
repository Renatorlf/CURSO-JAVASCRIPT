/**ARRAYS
Os arrays Javascript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedaeds. O item dentro dele é encontrado pela posição

Os arrays também são um tipo especial de objeto.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["mouse", "teclado", "monitor","fonte"];

A lista[0] (lista na posição 0) vai conter o valor "mouse".
A lista[1] (lista na posição 1) vai conter o valor "teclado";

Obs. Um array JavaScript não pode armazenar strings como índices

E assim por diante.
*/

//Array literal - quando passamos todos os intes da lista
const lista = ["mouse", "teclado", "monitor","fonte"];

//Passando um item da lista para uma variável
let x = lista[1];

//alterando um item de uma lista
lista[1] = "pendriver"
//alert(lista[1]);

//Para ver todos os itens de uma lista
console.log(lista);

//Diferença entre matrizes e objetos.
/*const pessoa = ["Andre", "Silva", 20];//array
const pessoa = {nome:"Andre", sobrenome:"Silva", idade:20};//objeto*/


const pessoa = ["Andre", "Silva", 20];
//- Para saber quantos ites tem na list
//pessoa.length; (lenght==comprimento)

//ultimo item da lista.
//alert(pessoa[pessoa.length -1]);

// - Adicionando um item no final da lista
//pessoa.push("Brasileiro");
//console.log(pessoa);

//Para saber se uma variável e uma matriz
alert(Array.isArray(pessoa));//mostra true


