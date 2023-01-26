//Criando Baralho
const naipes = {"espadas": "♠", "copas": "♥", "ouros": "♣", "paus": "♦"};
const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

// Baralhos Vazios
let baralho1 = [];
let baralho2 = [];

//Preenchendo os baralhos com todas as cartas possíveis
function criaBaralhos(){
    for (let naipe in naipes) {
        for (let j = 0; j < valores.length; j++) {
            //Adicionando uma carta ao baralho1
            baralho1.push([valores[j], naipes[naipe]]);
            //Adicionando uma carta ao baralho2
            baralho2.push([valores[j], naipes[naipe]]);
        }
    } 
}

//Criando Baralhos
criaBaralhos();

//Arrays que vão conter a soma dos valores das cartas
let valoresCartaUsuario = 0
let valoresCartaComputador = 0

//Criando as Cartas da Mesa
const tirar_cartaMesa = document.getElementById("tirarCarta");

//Função para selecionar o naipe e o valor  de uma carta aleatória do baralho
function selecionaCartaMesa(baralho){
    //Gerando um número aleatório correspondente ao índice de uma carta no baralho
    let index = Math.floor(Math.random() * baralho.length);

    //Selecionando a carta
    carta_mesa = baralho[index];

    //Limpa a carta do baralho 
    baralho = baralho.splice(baralho.indexOf(carta_mesa),1)
    
    let valoresCarta = {'Q': 10,'J': 10,'K': 10,'A': 1
};
      
      let valorCarta = valoresCarta[carta_mesa[0]] || parseInt(carta_mesa[0]);
      valoresCartaUsuario += valorCarta;      

    return carta_mesa

    
}
//Evento para quando o botão de "tirar carta" é clicado
tirar_cartaMesa.addEventListener("click",()=>{
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


//Criando as Cartas do USER
let tirar_cartaUsuario = document.getElementById("receberCarta")

tirar_cartaUsuario.addEventListener("click", ()=>{
    let divCartasJogo = document.createElement("div");
    divCartasJogo.classList.add("cartas__mesa");

    carta_mesaSelecionada = selecionaCartaMesa(baralho1)

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
    divCartasJogo.appendChild(h2ValorUp);
    divCartasJogo.appendChild(h2Naipe);
    divCartasJogo.appendChild(h2ValorDown);


    let cartas_jogo = document.querySelector(".cartas_usuarioxpc");
    cartas_jogo.appendChild(divCartasJogo);
})

//Embaralhando as Cartas e Reiniciando o Jogo

embaralhar_carta = document.getElementById("embaralharCarta")

function reiniciarJogo() {
    baralho1 = []
    baralho2 = []
    valoresCartaUsuario = []
    valoresCartaComputador = []
    criaBaralhos();
    removeCartas('.cartas');
    removeCartas('.cartas_usuarioxpc');
}
function removeCartas(selector) {
    let cartas = document.querySelector(selector);
    while (cartas.firstChild) {
        cartas.removeChild(cartas.firstChild);
    }
}

embaralhar_carta.addEventListener("click", reiniciarJogo);
