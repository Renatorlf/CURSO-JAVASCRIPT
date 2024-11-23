/*EVENTOS
 Eventos são ações disparadas pela interação do usuáreo na página.
 É o correto manejo desses eventos que tornam as oáginas interativas e dinâmicas.
 */

 //--> Onclick - Chama uma função quando um botão for clicado:
 //Nesta função eu posso colocar qualquer coisa, que será chamada quanco clicar no botão apenas uma vez.

 /*function clicarAlertar(){
    alert("Óla, Mundo")
 }*/

//--> ondblclick - chama a função dando dois cliques, funciona como o onclick.

/*function clicarAlertar(){
    alert("Evento do clique duplo")
}*/

//--> onmouseover - chama a função quando o ponteiro do mouse estiver sobre a DIV

/*function viraVermelho(){
    //função que altera a cor da div
    let div = document.getElementById("texte");
    div.style.backgroundColor = "red";
}*/

//--> onmouseout - chama a função quando o ponteiro do mouse sai da DIV

/*function viraAzul(){
    //função que altera a cor da div
    let div = document.getElementById("texte");
    div.style.backgroundColor = "blueviolet";
}*/

//onmousemove - chama a função quando o ponteiro do mouse se move dentro da DIV

/*function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append(' O mouse moveu');
}*/

//--> onmousedown - chama a função quando o click do botão foi pressionado.



//--> onmouseup - chama a função quando o clique do botão é liberado.

//--> onfocus - dispara o evento quando clica no campo

/*function limpaTexto(){
    document.getElementById("campoTexto").value = ""
}*/

//--> onchange - Disparado quando existe uma mudança no conteudo. "Ao mudar"

/*function mudou(){
    console.log("Mudou");
}*/

//--> onblur - Dispara quando o elemento perde o foco

//--> onkeydown - Dispara quando a tecla é pressionada.

//--> onkeypress Dispara quando uma tecla é pressionada e solta

function teclaPressionada(){
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}

//--> onkeyup - Dispara quando uma tecla é solta sobre um elemento.