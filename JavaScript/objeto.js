/* OBJETOS 
 Objetos são basicamente variáveis com muitos valore dentro.

 Ex: const carro = {marca:"Ford", modelo:"Ka", ano: 2015}

 Os valores dentro de um objeto são chamado de propriedades

 Objetos também podem ter métodos. Um método é uma função colocada dentro de uma propriedade.
*/

//Objeto Literal e quando definimos as propriedades
//Objeto não literal é quando os valores são gerados dinamicamente
const carro = {
    //propriedades ou valores
    marca: "ford", 
    modelo: "ka", 
    ano: 2015, 
    placa: "ABC-1234",
    //metódo é uma função dentro de uma propriedade
    buzina: function() {alert("Biiiiiiii") },
    completo: function(){
        return " A marca é " +this.marca+ " e o modelo é: "+ this.modelo
    }
};

console.log(carro.completo());

//forma de chamar o objeto
//console.log(carro.buzina);

//Outra forma de chamar o objeto
//console.log(carro["marca"]);

//Forma de chamar o método
//carro.buzina();