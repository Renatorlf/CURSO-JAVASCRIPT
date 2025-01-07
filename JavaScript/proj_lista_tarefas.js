let contador = 0
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn_add');
let main = document.getElementById('areaLista')

function addTarefa(){
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;



    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    //UTILIZANDO CRASE O JAVASCRIPT RECONHECE O HTML EM NECESSITAR FAZER ALTERAÇÕES
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
            
        ++contador;

        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item_icone">
                <i id="icone_${contador}" class="material-icons">radio_button_unchecked</i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item_nome">
                ${valorInput}
            </div>
            <div class="item_botão">
                <button onclick = "deletar(${contador})" class="delete"><i class="material-icons">delete</i>Deletar</button>
            </div>
        </div>`;

        //Adicionar novo campo no main
        main.innerHTML += novoItem;

        //Zerar o campo input depois que clicar no botão adicionar
        input.value = '';
        input.focus();
    }
}

function deletar(idcontador){
    let tarefa = document.getElementById(idcontador);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('classe');

    if(classe=="item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);

        icone.classList.remove('material-icons');
        icone.classList.add('check_circl');
    }
}

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})