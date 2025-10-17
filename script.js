const imagemVisualizacao = document.querySelector("#visializacao img");
let numImagemSelecionada = 1;

function atualizarImagemSelecionada() {
    const opcaoImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked');
    console.log(opcaoImagemSelecionada);
    imagemVisualizacao.scr = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" +
    numImagemSelecionada + ".jpeg";
}

atualizarImagemSelecionada();

//30 min