/** Switch
 É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível não será executada e o valor padrão será acionado.
 */

 function verificaCor(){
    let cor = document.getElementById("cor").value;

    switch (cor){
        case "azul":
            //o que acontece
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            //o que acontece
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            // o que acontece
            document.body.style.backgroundColor = "yellow";
            break;
        default:
            //o que acontece
            document.getElementById("teste").innerHTML = "Nenhuma cor disponivel para esta cor "+cor;
    
     }
 }

 