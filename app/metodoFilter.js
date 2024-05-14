// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
// const btnFiltrarLivrosDeBack = document.getElementById('btnFiltrarLivrosBack');
// const btnFiltrarLivrosDeDados = document.getElementById('btnFiltrarLivrosDados');

// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivros);
// btnFiltrarLivrosDeBack.addEventListener('click', filtrarLivros);
// btnFiltrarLivrosDeDados.addEventListener('click', filtrarLivros);

const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirOsLivrosNatela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveiNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveiNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}
