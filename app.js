


let numeroSecreto =  parseInt(Math.random() * 100 + 1)
console.log(numeroSecreto) 
let nome = prompt("Bem vindo ao Jogo do numero secreto, digite seu nome fulaninho") 
let inconveniente = prompt("Alias, qual é o dia da semana?")
let resposta
let tentativas = 0

// pedido de nome e dia da semana
if(inconveniente == "Sabado" || inconveniente == "Domingo"){
    alert("Bom final de semana parceiro hehehehe") 
} 
else{
    alert("Boa semana mano")
}

// jogo em sí
while(resposta != numeroSecreto) {
    resposta = prompt(`Adivinhe o numero secreto, ${nome} de 1 a 100`) 
    tentativas++;
    
    if (numeroSecreto == resposta){
        break     
    } 
    else {
        alert("Você errou, BURRO");
        if ( resposta > numeroSecreto){
            alert("Ta mirando em Deus?")
        } else {
            alert("Cuidado para não acertar um anão, tente novamente.")
        }
    }
}

let PluralTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Você descobriu o numero secreto, ${numeroSecreto}, com ${tentativas} ${PluralTentativa}.`)

