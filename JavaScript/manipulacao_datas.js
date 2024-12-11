/** MANIPULAÇÃO DE DATAS COM JAVASCRIPT */

//COMANDO BASE PARA PEGAR A DATA
let data = new Date();
console.log(data)

//COMANDO PARA SABER O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
console.log(ano);

//PEGAR O MÊS ATUAL - DE 0 ATÉ 11 SENDO JANEIRO 0 E DEZEMBRO 11
let mes = data.getMonth();
console.log(mes);

//FORMA DE MOSTRAR O MÊS PELO NOME.
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

//PEGAR O DIA DO MÊS
let dia = data.getDate();
console.log(dia);

//PEGAR O DIA DA SEMANA DE 0 ATÉ 6 - (ELE MOSTRA COMO UMA MATRIZ)
let diaDaSemana = data.getDay();
console.log(diaDaSemana);

//DIA DA SEMANA PELO NOME
const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
let diaSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diaSemanaEscrito);

//PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();
console.log(hora);

//PEGAR OS MINUTOS - DE 0 A 59
let minutos = data.getMinutes();
console.log(minutos);

//PEGAR SEGUNDO - DE 0 ATÉ 59
let segundos = data.getSeconds();
console.log(segundos);

//PEGAR MILISEGUNDOS - DE ATÉ 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

//PEGAR A DATA NO PADRÃO BRASILEIRO
let dataBR = data.toLocaleDateString('pt-br');
console.log(dataBR);

//COMPARAR DATAS - MAIOR OU MENOR. EX VENCIMENTO
var hoje = new Date();
var vencimento = new Date(2025, 0, 15);

if(hoje > vencimento){
    console.log("Sua conta está vencida!")
} else {
    console.log("Sua conta ainda não venceu!")
}

//DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2025, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000))

console.log(diferencaDias + ' dias');

