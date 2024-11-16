/*OPERADORES -
-> Os operadores JavaScript são usados para atribuir valores, comparar valores, executar operações aritméticas e muito mais.

São os sianis que usamos: + - * / = ++ -- += -= && || ETC...

São separados em 6 "categorias":

1 - Operadores Aritméticos (matemática)
2 - Operadores de Atribuição
3 - Operadores de Sequência
4 - Operadores de Comparação
5 - Operadores Condicional (Ternário)
6 - Operadrores Lógicos

*/

//--> Operadores Aritméticos - (Matemática)
//var valor1, valor2, total;
//valor1 = 5;
//valor2 = 2;

//total = valor1 + valor2; // Adição
//total = valor1 - valor2; //subtração
//total = valor1 * valor2; //Multiplicação
//total = valor1 / valor2; //Divisão

//Incremento (recebe mais 1)
//total = ++ valor1

//Decremento (subtrai menos 1)
//total = ++ valor1


//--> Operadores de Atribuição
//O sinal de (=) é recebe ou atribui
//total = valor2 * valor1

//O sinal de (+= ou -=) é para quando necessita somar a mesma variável com outra variável
//exemplo sem o sinais juntos (valor1 = valor1 + valor2) 
//valor1 += valor2
//valor1 -= valor2
//valor1 *= valor2
//valor1 /= valor2

//--> Operadores de Sequência ou concatenação
//O sinal de (+) é tulizados para concatenar palavras

/*var valor1, valor2, total;
valor1 = "Renato";
valor2 = "Lopes";
total = valor1 + valor2
console.log(total);*/

//--> Operadores de Comparação
/*Dois sinais de (==) é realmente a comparação igual, que nos retorna dois valores (false ou true)*/
//Para verificar se o valor e o tipo são iguais, utiliza três sinais de igual (===) 
//(!=) Sinal de diferente
//Sinal de Menor (<)
//Sinal de Maior (>)
//Sinal de Menor ou igual (<=)
//Sinal de Maior ou igual (>=)

/*var valor1, valor2, total;
valor1 = 8;
valor2 = 10;
total = valor1 >= 7;
console.log(total);*/

//--> Operador de Condicional = (Ternário)
/*var idade, eleitor;
idade = 20;
eleitor = (idade < 18) ? "Não, eleitor" : "Sim, eleitor";

alert('A resposta é: ' + eleitor + ' a idade dele é de: ' + idade + ' anos');*/

//--> Operadores Lógicos

var idade, eleitor, resultado;
idade = 66;
eleitor = (idade < 18) ? "Não, eleitor" : "Sim, eleitor";

//resultado = (idade > 60 && idade < 70);(&&) é o mesmo que (e), que retorna true ou false

//resultado = (idade === 65 || idade === 72);(||)é o mesmo que igual, que retorna true ou false

resultado = !(idade === 65);//(!)Sinal de diferente, que retorna true ou false

alert(resultado);