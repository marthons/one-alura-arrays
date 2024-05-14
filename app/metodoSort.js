const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');


btnOrdenarPorPreco.addEventListener('click', ordenarPorPreco);

function ordenarPorPreco(){
    let precosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirOsLivrosNatela(precosOrdenados);
}