const removeCliente = id => {
    if(confirm("Deseja deletar o cliente")) {
        deletaCliente(id)
        document.location.reload()
    }
}

//captura tabela
const corpoTabela = document.querySelector("[data-conteudo-tabela]")

const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr')


    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
        <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
        <a href="edita-clientes.html?id=${id}">
        <button type="button" class="btn btn-info">Editar</button>
        </a>
    `

    //colocar conteudo dentro da linha
    linha.innerHTML = conteudoLinha

    return linha
}

//exibir dados clientes
listarClientes().then( exibe => {
    exibe.forEach( index => {
        corpoTabela.appendChild(exibeCliente(index.cpf, index.nome, index.id))
    })
})