const recebeURL = new URL(window.location)//fala o endereço da pagina

const id = recebeURL.searchParams.get('id')

const inputCPF = document.querySelector('[data-cpf]')
const inputNome = document.querySelector('[data-nome]')

//traz os dados do formulario de editar
detalhaCliente(id).then(dados => {
    inputCPF.value = dados[0].cpf  
    inputNome.value = dados[0].nome
})

//capturar formulario
const formEdicao = document.querySelector('[data-form]')


const mensagemSucesso = (mensagem) => {
    const linha = document.createElement('tr')

    const conteudoLinha =  `
        <div class="alter alert-sucess" role="alert">
            ${mensagem}
        </div>
    `

    linha.innerHTML = conteudoLinha;

    return linha;
}

const mensagemErro = (mensagem) => {
    const linha = document.createElement('tr')

    const conteudoLinha =  `
        <div class="alter alert-warning" role="alert">
            ${mensagem}
        </div>
    `

    linha.innerHTML = conteudoLinha;
    
    return linha;
}


formEdicao.addEventListener('submit', event => {
    event.preventDefault()

    //garantir que o cpf seja valido
    if(!validaCPF(inputCPF.value)){
        alert("Esse cpf não existe")
        return
    }

    //dados vindos da api (cliente.js)
    editaCliente(id, inputCPF.value, inputNome.value).then( resposta => {
        if(resposta.status == 200){
            formEdicao.appendChild(mensagemSucesso(
                'Ciente editado com sucesso !'
            ))
        } else {
            formEdicao.appendChild(mensagemErro(
                'Erro na edição do cliente!'
            ))
        }
    })
})