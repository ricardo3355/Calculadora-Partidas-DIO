
///////////////////////////////////////////////////////////////////////////////////////////

// Calculador de Placar
// Abaixo Insira no marcado as "Vitorias"  e "Derrotas" e nome do "Jogador"
// e a Function main vai desencadear os demais comandos do sistema e exibir logo abaixo
// Ativando o sistema de cálculo e nivelamento de classe através das function abaixo


let vitorias = 99
let derrotas = 1
let resultado = (vitorias -  derrotas)
let jogador = "Ricardo"

main()

////////////////////////////////////////////////////////////////////////////////////////////

function main(){
    calcularNivel()
    ganhouOuPerdeu()
}

// A Function "calcularNivel" pega a variavel global (var), e com base no valor obtido
// testa a quantida de vitórias e classifica o nível do herói, e retorna para a variavel 
// global "resultado" atribuindo seu valor para uso posterior.

let nivel = calcularNivel()
function calcularNivel(nivel){
   
    if (resultado <=10){
    nivel = "Ferro"
}   else if (resultado >= 11 && resultado <= 20) {
    nivel = "Bronze";
}   else if (resultado >= 21 && resultado <= 50) {
    nivel = "Prata"
}   else if (resultado >= 51 && resultado <= 80) {
    nivel = "Ouro"
}   else if (resultado >= 81 && resultado <= 90) {
    nivel = "Diamante"
}   else if (resultado >= 91 && resultado <= 100) {
    nivel = "Lendário"
}   else {
    nivel = "Imortal"
}
    return nivel;
}
// A Function ganhouOuPerdeu testa a variável global vitoriaOuDerrota para determinar 
// se é o valor da variável resultado deve ser "positivo" ou "negativo" e retorna à 
// variavel para uso posterior.

let vitoriaOuDerrota = ganhouOuPerdeu()
function ganhouOuPerdeu(vitoriaOuDerrota){

    if (resultado <0){
    vitoriaOuDerrota = "derrotas"
}   else {
    vitoriaOuDerrota = "vitórias"
}   
    return vitoriaOuDerrota;
}

// Por fim, o sistema com base nas informações obtidas e armazenadas acima, exibe a mensagem
// de saída concatenando todas as variáveis consolidadas.

///////////////////////////////////// SAIDA FINAL /////////////////////////////////////////

console.log(`O Herói tem saldo de ${resultado} ${vitoriaOuDerrota}, e está no nível de ${nivel}`)

 //////////////////////////////////////////////////////////////////////////////////////////

 // "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"