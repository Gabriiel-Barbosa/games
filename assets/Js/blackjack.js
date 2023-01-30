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

let pontucaoMesa = 0

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
    
    let valoresCarta = {'Q': 10,'J': 10,'K': 10,'A': 1};

    let valorCarta = valoresCarta[carta_mesa[0]] || parseInt(carta_mesa[0]);
    
    return carta_mesa 
}

//Embaralhando as Cartas e Reiniciando o Jogo

embaralhar_carta = document.getElementById("embaralharCarta")

function reiniciarJogo() {
    baralho1 = []
    baralho2 = []
    valorTortalCartasMesa = 0;
    valoresTotalUser = 0;
    valoresTotalComputador = 0;
    contadorCartas = 0;
    contadorCartasUser = 0
    contadorCartasPC = 0
    criaBaralhos();
    removeCartas('.cartas');
    removeCartas('.cartas_usuario');
    removeCartas('.cartas_pc')
}


function removeCartas(selector) {
    let cartas = document.querySelector(selector);
    while (cartas.firstChild) {
        cartas.removeChild(cartas.firstChild);
    }
}

embaralhar_carta.addEventListener("click", reiniciarJogo);
