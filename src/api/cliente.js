const listarClientes = () => {
    return fetch('http://localhost:4000/clientes')
    .then( resposta => {
        return resposta.json()
    })
    .then( json => {
        return json
    }) 
}

const cadastrarClientes = (nome,cpf) => {
    //tranforma em json
    const Json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })
    return fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: Json
    })
    .then(resp => {
        //envia para o servidor
        return resp.body
    })
}

const deletaCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'DELETE'
    })
}

const detalhaCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`,
    {
        method: 'GET'
    })
    .then(resposta => {
        return resposta.json()
    })
}

const editaCliente = (id, cpf, nome) => {
    const Json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: Json
    })
}