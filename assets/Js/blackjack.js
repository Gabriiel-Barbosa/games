//Criando Baralho
const naipes = {"espadas": "♠", "copas": "♥", "ouros": "♣", "paus": "♦"};
const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

//Iniciando dois baralhos vazios
let baralho1 = [];
let baralho2 = [];

let cartas__selecioandas = []

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

//Função para selecionar o naipe e o valor  de uma carta aleatória do baralho
function selecionaCartaMesa(baralho){
    //Gerando um número aleatório correspondente ao índice de uma carta no baralho
    let index = Math.floor(Math.random() * baralho.length);
    //Selecionando a carta
    carta_mesa = baralho[index];
    console.log(baralho)
    baralho = baralho.splice(baralho.indexOf(carta_mesa),1)
    return carta_mesa
    
}
//Evento para quando o botão de "tirar carta" é clicado
tirar_carta.addEventListener("click",()=>{
    //Criando a div com a classe cartas__mesa
    let divMesa = document.createElement("div");
    divMesa.classList.add("cartas__mesa");

    //Pegando a Carta
    carta_mesaSelecionada = selecionaCartaMesa(baralho1)

    //Criando os dois h2s

    let h2ValorUp = document.createElement("h2");
    h2ValorUp.classList.add("cartas__mesa--valor-up");
    h2ValorUp.textContent = carta_mesaSelecionada[0] 
    let h2Naipe = document.createElement("h2");
    h2Naipe.classList.add("cartas__mesa--naipe");
    h2Naipe.textContent = carta_mesaSelecionada[1];  
    let h2ValorDown = document.createElement("h2");
    h2ValorDown.classList.add("cartas__mesa--valor-down");
    h2ValorDown.textContent = carta_mesaSelecionada[0]  

    //Adicionando os h2s dentro da div cartas__mesa
    divMesa.appendChild(h2ValorUp);
    divMesa.appendChild(h2Naipe);
    divMesa.appendChild(h2ValorDown);
    
    //Adicionando a div cartas__mesa dentro de outra div com a classe cartas
    let cartas = document.querySelector(".cartas");
    cartas.appendChild(divMesa);
  });

