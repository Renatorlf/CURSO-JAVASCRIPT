/**
 JSON significa JavaScript object Natation que traduzido para o português fica algo como notação de objeto JavaScript.

 Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto

 Ele é usado principalmente para transportar dados emtre sistemas de forma simples, já que e o formato de texto é lido por praticamnete toda linguagem de programação.

 Para trabalhar com JSON no JavaScript usamos dois métodos:

 JSON.perse() --> Converte texto no padrão JSOn em objeto

 JSON.stringify() --> converte objetos em Texto padrão JSON
 */

 //OBJETO CHAMADO CARRO
 const carro = {
    marca: "Fiat",
    modelo:"Uno",
    ano: 2021
 }

 //Transdormando o objeto em texto JSON
 let texto = JSON.stringify(carro);

 //Colocou o texto no HTML
 document.getElementById('area').innerHTML = texto;

 //Converteu texto em objeto
 let obj = JSON.parse(texto);

 //Pegou um valor do objeto
 console.log(obj.ano);