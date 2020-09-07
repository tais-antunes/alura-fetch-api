function verificaCPF(cpf) {
    const cpfsInvalidados = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "888888888888",
        "999999999999",
        "000000000000"
    ]

    //indexOf - mostra se o que eu quero esta dentro do array ou não, caso ele ache mostra a posição se não mostra -1
    return cpfsInvalidados.indexOf(cpf) === -1
}

function somaNumerosCPF(cpf, totalDeDigitos, peso) {
    //let pq o valor ficará sendo alterado
    let soma = 0
    for(let indice = 1; indice <= totalDeDigitos; indice++){
        //substring - recebemos string do formulario
        //indice do -1 = 0, primeira posição
        soma += parseInt(cpf.substring(indice -1, indice) * (peso - indice))
    }

    return soma
}

function verificaDigito(cpf, totalDeDigitos, peso, digitoDeVerificação){
    const soma = somaNumerosCPF(cpf, totalDeDigitos, peso)
    const resto = (soma * 10) % 11

    return resto === digitoDeVerificação
}

function verificaPrimeiroDigito(cpf) {
    const peso = 11
    const totalDeDigitosPrimeiraParte = 9
    const digitoDeVerificação = parseInt(cpf.substring(9, 10))

    return verificaDigito(
        cpf,
        totalDeDigitosPrimeiraParte,
        peso,
        digitoDeVerificação
    )
}

function verificaSegundoNumero(cpf) {
    const peso = 12
    const totalDeDigitosSegundaParte = 10
    const digitoDeVerificação = parseInt(cpf.substring(10,11))

    return verificaDigito(
        cpf,
        totalDeDigitosSegundaParte,
        peso,
        digitoDeVerificação
    )
}

function validaCPF(cpf) {
    return(
        verificaPrimeiroDigito(cpf) &&
        verificaSegundoNumero(cpf) &&
        verificaCPF(cpf)
    )
}