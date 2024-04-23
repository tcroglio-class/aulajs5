//instância inicial das variáveis contadoras e acumuladoras
var total = 0;
let contItem = 0;
let contQuant = 0;

function calcular() {
    //pega os valores inseridos nos inputs e soma
    let precoLivro = parseFloat(document.getElementById('precoLivro').value);
    let qtdLivros = parseFloat(document.getElementById('qtdLivros').value);
    let novoTotal = qtdLivros * precoLivro;
    total += novoTotal;
    contQuant += qtdLivros;

    //verifica se teve algum campo vazio
    if (!isNaN(qtdLivros) && !isNaN(precoLivro)) { //se não tiver ele responde com o resultado
        document.getElementById('valorTotal').textContent = `Valor Total: R$ ${total}`;
        criarFilho(qtdLivros, novoTotal);

    } else { //se tiver ele manda um alert 
        alert('Informe os dois campos, xiruzão!\n\n(Não esqueça de utilizar apenas números xD)')
    }

    console.log(`quantidade: ${contQuant}`);
}

function redefinir() {
    total = 0;
    contItem = 0;
    removerFilhos();
    document.getElementById('valorTotal').textContent = 'Valor Total: R$'
}

function criarFilho(quantidade, valorFilho) {
    //contando aqui
    contItem++;

    //botão para remover unicamente
    let novoBotao = document.createElement('button');
    novoBotao.style.width = '100px';
    novoBotao.textContent = 'Apagar';
    novoBotao.id = `btn${contItem}`;
    let idBotao = `livro${contItem}`;
    novoBotao.onclick = function () {
        removerUnico(idBotao);
    };

    //novo item da lista
    let novoLivro = document.createElement('li');
    novoLivro.textContent = `Livro ${contItem} | R$${valorFilho} total - ${quantidade} unidade(s)`;
    novoLivro.style.paddingBottom = '5px';
    novoLivro.style.color = 'black';
    novoLivro.style.fontSize = '15px'
    novoLivro.id = `livro${contItem}`;

    //criando os dois elementos (botão e item da lista)
    document.getElementById('lista').appendChild(novoLivro);
    document.getElementById(`livro${contItem}`).appendChild(novoBotao);
}

function removerFilhos() {
    //cria a lista que vai repor a lista apagada
    let novaLista = document.createElement('ul');
    novaLista.id = 'lista';

    //apaga a lista toda preenchida  
    let livro = document.getElementById(`lista`);
    livro.remove();

    //cria a nota lista dentro da div "aqui"
    document.getElementById('aqui').appendChild(novaLista);
}

function removerUnico(id, valor) {
    //pega o id do item que tu quer apagar e apaga
    let livroUnico = document.getElementById(id);
    livroUnico.remove();

}


function fecharPedido() {
    modal = document.getElementById('modal').style.display = 'block';
}