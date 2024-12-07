/* CLASSES EM JAVASCRIPT.
São estruturas que definem objetos com propriedades e métodos. Elas funcionam como um molde para criar objetos com características semelhantes. 
As classes são um conceito fundamental na programação orientada a objetos. Elas permitem agrupar objetos com características similares em uma mesma estrutura. 

Algumas das características das classes em JavaScript são:
-As classes são um tipo de função declarada com a palavra-chave class. 
-As classes podem ser estendidas para novos projetos de objeto baseados no pai. 
-As classes provêm uma maneira mais simples e clara de criar objetos e lidar com herança. 
-As classes definem propriedades e comportamentos que serão compartilhados por todas as instâncias dessa classe. 

Para criar um objeto a partir de uma classe, utiliza-se a palavra-chave new antes da declaração da classe. 
Para criar uma subclasse, usa-se a palavra-chave extends para informar ao JavaScript a classe na qual se quer basear a nova classe. 
 */

class Carro{
    constructor(valor1, valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    //metodo buzina
    buzina(){
        return this.modelo + " buzinou: Biiiiii";
    }
}

/**
 *Obs. As declarações de classes são consideradas não içadas:
 para fazer a contrução do objeto você precisa declarar as classes antes da chamada da função em baixo

 */
const uno = new Carro("fiat", "Uno", 2001);
const celta = new Carro("Chevrolet", "Celta", 2012);

//chamando o método
console.log(uno.buzina());

//modificando um valor
celta.ano = 2014;
console.log(celta)