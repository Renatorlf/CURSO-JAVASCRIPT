/**Variáveis são "recipientes" onde odemos armazenar informações que podem varias, ou seja, podem ter qualquer tipo de valor.
 
No JavaScript temos 3 palavras-chaves para declarar variáveis:
--> var
--> let
-->const
*/

// a variavel (var) poder ser modificados os varoles
//As variáves não podem conter números no ínicio e nem serem separados por espaços
//DECLARAÇÃO DE VARIÁVES
var a, b, c;

//ATRIBUIÇÃO DOS VALORES
a = 2;
b = 3;
c = a + b;

//alert(c);

//DECLARAÇÃO DE VARIÁVEIS
var nome, sobrenome, nomecompleto

//ATRIBUIÇÃO DE VARIÁVEIS
nome = "Renato";
sobrenome = "Lopes"
nomecompleto = nome + " " + sobrenome;
//Dessa forma fazemos a concatenação de palavras
//utilizando o sinal de mais, aspas, da ums espaço
document.getElementById("texto").innerHTML = nomecompleto;

//DECLARAÇÃO DE VARIÁVEIS UTILIZANDO let
//O let não pode permite redeclaração da variável, diferente da var que permite redeclaração
/*O (let) só funciona dentro de um escopo, se houver vários escopos diferente ele vai ser um para cada escopo, isso é bom porque não há risco de uma variáveis ser redeclarada em mais de um escopo assim como acontece com o (var). Por isso que utilizamos mais o let do que o var nas declarações de variávies*/

//Exemplo
let x = 10; //Neste escopo é 10

{
    let x = 2; //Neste escopo ele é 2
}

/*O const é uma variável de valor constante, que não muda independente do escopo, muito utilizada em um codigo quando a variável sempre vai ter o mesmo valor*/