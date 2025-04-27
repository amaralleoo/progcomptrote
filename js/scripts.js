function calcular (){
    // vamos criar duas variáveis 
    // JS as variáveis não possuem tipo
    // document.getElementById para obter os dados dos inputs do html
    let mascote, homenagem, leite, kit, suplemento, soma, equipe, sangue

    // recupera o valor do mascote digitado pelo usuário
    mascote = document.getElementById("mascote").value
    // recupera o valor da homenagem digitado pelo usuário
    homenagem = document.getElementById("homenagem").value
     // recupera a quantidade de litros de leite digitado pelo usuário
    leite = Number(document.getElementById("leite").value)
    kit = Number(document.getElementById("kit").value)
    suplemento = Number(document.getElementById("suplemento").value)
    sangue = Number(document.getElementById("sangue").value)

    soma = (mascote) + (homenagem) + (2 * (leite))

    equipe = document.getElementById("equipe").value
    if(equipe == "Laranja"){
        if(kit >= 97 && suplemento >= 49){
            soma = soma + 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >= 39){
            soma = soma + 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
        }
        else if(kit >= 49 && suplemento >= 25){
            soma = soma + 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
        }
        else if(kit >= 19 && suplemento >= 10){
            soma = soma + 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15)
        }
        if (sangue >= 49){
            soma = soma + 2500 + ((sangue = 49) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
    }
    else if (equipe == "Preta"){
        if(kit >= 103 && suplemento >= 52){
            soma = soma + 5000 +((kit - 103) * 30) + ((suplemento - 52) * 15)
        }
        else if (kit >= 82 && suplemento >= 42){
            soma = soma + 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15)
        }
        else if (kit >= 52 && suplemento >= 26){
            soma = soma + 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 21 && suplemento >= 10){
            soma = soma + 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15)
        }
        if (sangue >= 52){
            soma = soma + 2500 + ((sangue = 49) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
    }
    else if (equipe == "Roxa"){
        if(kit >= 103 && suplemento >= 52){
            soma = soma + 5000 +((kit - 103) * 30) + ((suplemento - 52) * 15)
        }
        else if (kit >= 82 && suplemento >= 42){
            soma = soma + 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15)
        }
        else if (kit >= 52 && suplemento >= 26){
            soma = soma + 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 21 && suplemento >= 10){
            soma = soma + 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15)
        }
        if (sangue >= 52){
            soma = soma + 2500 + ((sangue = 49) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        } 
    }
    else if(equipe == "Verde"){
        if(kit >= 103 && suplemento >= 52){
            soma = soma + 5000 +((kit - 103) * 30) + ((suplemento - 52) * 15)
        }
        else if (kit >= 82 && suplemento >= 42){
            soma = soma + 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15)
        }
        else if (kit >= 52 && suplemento >= 26){
            soma = soma + 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 21 && suplemento >= 10){
            soma = soma + 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15)
        }
        if (sangue >= 52){
            soma = soma + 2500 + ((sangue = 49) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
    }
    else { //equipe vermelha
        if(kit >= 103 && suplemento >= 52){
            soma = soma + 5000 +((kit - 103) * 30) + ((suplemento - 52) * 15)
        }
        else if (kit >= 82 && suplemento >= 42){
            soma = soma + 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15)
        }
        else if (kit >= 52 && suplemento >= 26){
            soma = soma + 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 21 && suplemento >= 10){
            soma = soma + 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15)
        }
        if (sangue >= 52){
            soma = soma + 2500 + ((sangue = 49) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
    }
    // retorna o valor ao html
    document.getElementById("soma").innerHTML=`A soma é ${soma}`
}