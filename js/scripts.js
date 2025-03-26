function calcular (){
    // vamos criar duas variáveis 
    // JS as variáveis não possuem tipo
    // document.getElementById para obter os dados dos inputs do html
    let mascote, homenagem

    // recupera o valor do mascote digitado pelo usuário
    mascote = document.getElementById("mascote").value
    // recupera o valor da homenagem digitado pelo usuário
    homenagem = document.getElementById("homenagem").value

    let soma = Number(mascote) + Number(homenagem)
    alert (soma)
}