/**na sintaxe do JavaScript o que estiver em aspas duplas ou simples será entendido como texto */
console.log("5 + 5"); /*Aspas duplas*/

console.log('5+5'); /**Aspas simples */

/**console.log(simples); Texto sem aspas ele da erro*, e quando acontece o erro da sintaxe ele para no erro, e não ler as linhas abaixo do erro*/

console.log(10 + 10)

/**Operadores Aritméticos - (+, -, *, /)*/
/**Operador de Tribuição e o sinal de (=) */

var a = 5;
var b = 2;
var c = a - b;
console.log(c);

/**O javaScript ele e Case sensitive, significa que as letras maiúsculas e minúsculas são tratadas de forma diferente*/

var pessoa = 'José';
var PESSOA = 'Maria';
var Pessoa = 'Marcos';
console.log(Pessoa);

/**Quando queremos unir duas palavras o JavaScript ele camel case ou seja. Camel case é uma convenção de nomenclatura utilizada em programação para escrever palavras compostas ou frases de forma legível. A principal característica do camel case é que a primeira letra de cada palavra é escrita em maiúscula, exceto a primeira palavra. Por exemplo, "tenteleressafrase" passa a ser "tenteLerEssaFrase" */

var tenteleressafrase;
var tenteLerEssaFrase;
var tente_ler_essa_frase;/**Podes ser utilizado também o underline como forma de unir palavras */
