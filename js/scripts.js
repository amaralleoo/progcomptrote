function calcular (){
    // vamos criar duas variáveis 
    // JS as variáveis não possuem tipo
    // document.getElementById para obter os dados dos inputs do html
    let mascote, homenagem, leite, kitAvulso, suplementoAvulso

    // recupera o valor do mascote digitado pelo usuário
    mascote = document.getElementById("mascote").value
    // recupera o valor da homenagem digitado pelo usuário
    homenagem = document.getElementById("homenagem").value
     // recupera a quantidade de litros de leite digitado pelo usuário
    leite = document.getElementById("leite").value
    kitAvulso = document.getElementById("kitAvulso").value
    suplementoAvulso = document.getElementById("suplementoAvulso").value
    

    let soma = Number(mascote) + Number(homenagem) + (2 * Number(leite)) + 
                (30 * Number(kitAvulso)) + (15 * Number(suplementoAvulso))
    document.getElementById("soma").innerHTML=`A soma é ${soma}`
}