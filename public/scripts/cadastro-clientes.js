//pegando o formulario
const formCadastroCliente = document.querySelector('[data-form]')

formCadastroCliente.addEventListener("submit", event => {
    event.preventDefault()

    const nome = event.target.querySelector('[data-nome]').value
    const cpf = event.target.querySelector('[data-cpf]').value

    if(validaCPF(cpf)){
        cadastrarClientes(nome, cpf)
    } else {
        alert('o cpf não é valido')
    }
})