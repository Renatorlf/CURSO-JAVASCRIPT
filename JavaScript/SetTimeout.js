/**EVENTOS DE TEMPO COM JAVASCRIPT
 
Os eventos de tempo permitem a execução do código em intervalos de tempo especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com JavaScript são:

- setTimeout(function, tempo em milisegundos)
--> Executa uma função, depois de esperar um número especificado de milisegundos

- setInterval(function, miliseconds)
-->É o meso que o setTimeout(). mas repete a execução da função continuamente.
 */

// --> Explicando o setTimeout
/*function ativarContagem(){
    document.getElementById("tempo").innerHTML = "Começou a contar!";
    //ATIVA A FUNÇÃO APENAS UMA VEZ QUANDO O TEMPO É EXPECIFICADO
    tempo = setTimeout(function(){document.getElementById("tempo").innerHTML = "Executou o setTimeout";},5000);
}

function pararContagem(){
    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "Parou a contagem";
}*/

//--> Explicando o setInterval

function ativarContagem(){
    tempo = setInterval(function(){
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById('tempo').innerHTML = soma;
    }, 1000);
}

function pararContagem(){
    clearInterval(tempo);
    
}