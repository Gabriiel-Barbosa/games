//Criando Baralho
const naipes = {"espadas": "♠", "copas": "♥", "ouros": "♣", "paus": "♦"};
const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

//Iniciando dois baralhos vazios
let baralho1 = [];
let baralho2 = [];

//Preenchendo os baralhos com todas as cartas possíveis
for (let naipe in naipes) {
    for (let j = 0; j < valores.length; j++) {
        //Adicionando uma carta ao baralho1
        baralho1.push([valores[j], naipes[naipe]]);
        //Adicionando uma carta ao baralho2
        baralho2.push([valores[j], naipes[naipe]]);
    }
}

//Criando as Cartas
const tirar_carta = document.getElementById("tirarCarta");

//Função para selecionar o naipe de uma carta aleatória do baralho
function selecionaCartaNaipe(baralho){
    //Gerando um número aleatório correspondente ao índice de uma carta no baralho
    let index = Math.floor(Math.random() * baralho.length);
    //Selecionando a carta
    let naipe = baralho[index];
    //Retornando o naipe da carta
    return naipe[1];
}

//Função para selecionar o valor de uma carta aleatória do baralho
function selecionaCartavalor(baralho){
    //Gerando um número aleatório correspondente ao índice de uma carta no baralho
    let aleatorio = Math.floor(Math.random() * baralho.length);
    //Selecionando a carta
    let valor = baralho[aleatorio]
    //Retornando o valor da carta
    return valor[0]
}

//Evento para quando o botão de "tirar carta" é clicado

//Evento para quando o botão de "tirar carta" é clicado
tirar_carta.addEventListener("click",()=>{
    //Criando a div com a classe cartas__mesa
    let divMesa = document.createElement("div");
    divMesa.classList.add("cartas__mesa");

    //Criando os dois h2s
    let h2Valor = document.createElement("h2");
    h2Valor.classList.add("cartas__mesa--valor");
    h2Valor.textContent = selecionaCartavalor(baralho1)
    let h2Naipe = document.createElement("h2");
    h2Naipe.classList.add("cartas__mesa--naipe");
    h2Naipe.textContent = selecionaCartaNaipe(baralho1)
    
    //Adicionando os h2s dentro da div cartas__mesa
    divMesa.appendChild(h2Valor);
    divMesa.appendChild(h2Naipe);
    
    //Adicionando a div cartas__mesa dentro de outra div com a classe cartas
    let cartas = document.querySelector(".cartas");
    cartas.appendChild(divMesa);
  });
