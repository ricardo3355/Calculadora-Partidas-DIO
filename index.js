// precisa calibrar e configurar o contador de vitorias e classificador


///////////////////////////////////////////////////////////////////////////////////////////

// Calculadora de Placa
// Abaixo Insira no marcado as "Vitorias"  e "Derrotas" e nome do "Jogador"
// e a Function main vai desencadear os demais comandos do sistema e exibir logo abaixo
// Ativando o sistema de cálculo e nivelamento de classe através das function abaixo


let vitorias = 20
let derrotas = 39
let resultado = (vitorias -  derrotas)
let jogador = "Ricardo"

main()

////////////////////////////////////////////////////////////////////////////////////////////

function main(){
    calcularNivel()
    exibirPlacar()
    
}

// A Function "calcularNivel" pega a variavel global (var), e com base no valor obtido
// testa a quantida de vitórias e classifica o nível do herói, e retorna para a variavel 
// global "resultado" atribuindo seu valor para uso posterior.

var nivel = calcularNivel()
function calcularNivel(resultado){
   
    if (resultado <=10){
    nivel = "Ferro"
}   else if (resultado <= 20) {
    nivel = "Bronze";
}   else if (resultado <= 50) {
    nivel = "Prata"
}   else if (resultado <= 80) {
    nivel = "Ouro"
}   else if (resultado <= 90) {
    nivel = "Diamante"
}   else if (resultado <= 100) {
    nivel = "Lendário"
}   else {
    nivel = "Imortal"
}
    return nivel;
}

// A Function ganhouOuPerdeu testa a variável global vitoriaOuDerrota para determinar 
// se é o valor da variável resultado deve ser "positivo" ou "negativo" e retorna à 
// variavel para uso posterior.


// A Function exibirPlacar exibe uma mensagem com base no resultado da varivavel "resultado"
// utilizei essa função para trabalhar com a function "main" e chamar todo processo de uma vez


function exibirPlacar(){
    console.log("O saldo das partidas é de " + resultado + " " + ".")
}

// Por fim, o sistema com base nas informações obtidas e armazenadas acima, exibe a mensagem
// de saída concatenando todas as variáveis consolidadas.


///////////////////////////////////// SAIDA FINAL /////////////////////////////////////////

console.log("O jogador " + jogador + " atingiu o nível " + nivel + ".")

 //////////////////////////////////////////////////////////////////////////////////////////

