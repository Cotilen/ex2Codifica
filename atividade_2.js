var prompt = require("prompt-sync")()

function exercicio_1() {
    console.log("Vamos calcular quanto tempo de vida você perdeu?");
    console.log();

    var cigarros = parseInt(prompt("Quantos cigarros você fuma por dia? "))
    console.log();
    var anos = parseInt(prompt("Há quantos anos você fuma? "))

    if (isNaN(anos) && isNaN(cigarros)) {
        console.log("\nPor favor, digite numeros válidos");
    } else {
        var dias = anos * 365

        var diasPerdidos = parseInt(((((cigarros * dias) * 10) / 6) / 24))

        console.log(`\nVocê já perdeu ${diasPerdidos} dias de vida por causa do cigarro!` );
    }

}

function exercicio_2() {
    var velocidade = parseInt(prompt("Qual foi a velocidade do carro em Km/h? "))

    if (isNaN(velocidade)) {
        console.log("\n Por favor, digite um número válido.");
    }else{
        var multa = velocidade - 80

        if (multa > 0) {
            console.log(`\nVocê foi multado em ${multa * 5} reais!`);
        } else {
            console.log("\nVocê não foi multado!");
        }
    }
}

function exercicio_3() {
    var distancia = parseInt(prompt("Quantos quilômetros você deseja percorrer? "))

    if (isNaN(distancia)) {
        console.log("\n Por favor, digite um número válido.");
    }else{

        if(distancia > 200){
            var preco = distancia * 0.45
        }else{
            var preco = distancia * 0.50
        }

    console.log(`\nO preço da passagem será de ${preco} reais!`);
            
    }
}

function exercicio_4() {
    var reta1 = parseInt(prompt("Por favor, digite o tamanho da primeira reta: "))
    var reta2 = parseInt(prompt("Por favor, digite o tamanho da segunda reta: "))
    var reta3 = parseInt(prompt("Por favor, digite o tamanho da terceira reta: "))

    if(isNaN(reta1) || isNaN(reta2) || isNaN(reta3)){
        console.log("Por favor, digite valores válidos");
    }else{

if(reta1 + reta2 > reta3 && reta1 + reta3 > reta2 && reta2 + reta3 > reta1)
    console.log("É possível formar um triângulo com estas medidas");
else
    console.log("Não é possível formar um triângulo com estas medidas");
    }
}

function exercicio_5(){
    console.log(`Movimentos: \n 1)Pedra; \n 2)Papel; \n 3)Tesoura;`);
    var primeiroJogador = parseInt(prompt("Por favor, digite o número correspondente ao movimento do primeiro jogador: "))
    console.log();
    var segundoJogador = parseInt(prompt("Por favor, digite o número correspondente ao movimento do segundo jogador: "))

    if (isNaN(primeiroJogador) || isNaN(segundoJogador) || primeiroJogador > 3 || segundoJogador > 3 || primeiroJogador < 1 || segundoJogador < 1) {
        console.log("\n Por favor, digite números válidos.");
    }else{
        if (primeiroJogador == 1 && segundoJogador == 2) {
            console.log("\n O segundo jogador ganhou!!");
        }else if (primeiroJogador == 1 && segundoJogador == 3){
            console.log("\n O primeiro jogador ganhou!!");
        }else if(primeiroJogador == 2 && segundoJogador == 1){
            console.log("\n O primeiro jogador ganhou!!");
        }else if(primeiroJogador == 2 && segundoJogador == 3){
            console.log("\n O segundo jogador ganhou!!");
        }else if(primeiroJogador == 3 && segundoJogador == 1){
            console.log("\n O segundo jogador ganhou!!");
        }else if(primeiroJogador == 3 && segundoJogador == 2){
            console.log("\n O primeiro jogador ganhou!!");
        }else{
            console.log("\nEmpate!!");
        }
    }
}

function exercicio_6(){
    var tentativa
    var valor =  parseInt((Math.random() * 10 / 2)) + 1
    console.log(valor);

    do {
        tentativa = parseInt(prompt("Tente acertar o valor sorteado (1 a 5): "))

        if (isNaN(tentativa) || tentativa < 0 || tentativa > 5) {
            console.log("\nPor favor, digite um número válido.");
        }else if(tentativa != valor){
            console.log("\nVocê errou! Tente novamente!");
        }

    } while (tentativa !== valor) {
        console.log("\nParabéns, você acertou!");
    }
}

function exercicio_7(){
    var preco = 0

    var tipoCarro = prompt("Qual o tipo de carro alugado (1-Popular 2-Luxo)? ")
    var dias = parseInt(prompt("Quantos dias de aluguel? "))
    var km = parseInt(prompt("Quantos Km foram percorridos? "))

    if(isNaN(tipoCarro) || isNaN(dias) || isNaN(km) || tipoCarro > 2 || tipoCarro < 1){
        console.log("\n Por favor, digite números válidos!");
    }else{
        if(tipoCarro == 1){
            preco += 90 * dias

            if(km <= 100){
                preco += km * 0.20
            }else{
                preco += km * 0.10
            }
        }else{
            preco += 150 * dias

            if(km <= 200){
                preco += km * 0.30
            }else{
                preco += km * 0.25
            }
        }

        console.log(`\n O preço total a ser pago é ${preco} reais.`);
    }
}

function exercicio_8(){
    var pontos
    var horas = parseInt(prompt("Quantas horas de atividade você teve no mês? "))

    if (isNaN(horas)) {
        console.log("\n Por favor, digite números válidos!");
    }else{
        if(horas <= 10){
            pontos = horas * 2
        }else if(horas <= 20){
            pontos = horas * 5
        }else{
            pontos = horas * 10
        }

        console.log(`\nVocê obteve ${pontos} nesse mês, isso equivale a ${pontos * 0.05} reais`);
    }

}

// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.

function exercicio_9(){
    
}

exercicio_9()