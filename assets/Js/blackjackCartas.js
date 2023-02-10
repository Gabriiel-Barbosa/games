//Evento para quando o botão de "tirar carta" é clicado

let contadorCartas = 0;

tirar_cartaMesa.addEventListener("click",()=>{
    if (contadorCartas == 0 || contadorCartas == 1 ) {
        alerta("Você ainda não possui cartas. Por favor, clique no botão 'Distribuir cartas'");
        return;
        
    } else {
         //Criando a div com a classe cartas__mesa
    let divMesa = document.createElement("div");
    divMesa.classList.add("cartas__mesa");

    //Pegando a Carta
    carta_mesaSelecionada = selecionaCartaMesa(baralho1)

    // Pontuação Total das Cartas na mesa
    
   console.log (carta_mesaSelecionada[0])
   if ( carta_mesaSelecionada[0] == 'J' || carta_mesaSelecionada[0] == 'Q'|| carta_mesaSelecionada[0] == 'k') {
    valorTotalCartasMesa += 10;}
    else if (carta_mesaSelecionada[0] == 'A'){
        valorTotalCartasMesa += 1;
    }
    else{
        valorTotalCartasMesa += parseInt( carta_mesaSelecionada[0])
    }


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
    }
});

//Criando as Cartas do USER

let contadorCartasUser = 0;

let tirar_cartaUsuario = document.getElementById("receberCarta");
let tirar_cartaComputador = document.getElementById("receberCarta");

tirar_cartaUsuario.addEventListener("click", () => {
    if (contadorCartasUser === 2) {
        alerta("O limite de cartas por usuário são 2.");
        return;}

    let divCartasJogo = document.createElement("div");
    divCartasJogo.classList.add("cartas__mesa");

    carta_mesaSelecionada = selecionaCartaMesa(baralho1);
    //Pontuação da Cartas do Computador 
    let valoresCarta = {'K': 10,'J': 10,'Q': 10,'A': 1};
    carta_mesaSelecionada = selecionaCartaMesa(baralho1);
    let valorCarta = valoresCarta[carta_mesaSelecionada[0]] || parseInt(carta_mesaSelecionada[0]);
    valoresTotalUser = valoresTotalUser + valorCarta;
    //console.log(valoresTotalUser);
    

    let h2ValorUp = document.createElement("h2");
    h2ValorUp.classList.add("cartas__mesa--valor-up");
    h2ValorUp.textContent = carta_mesaSelecionada[0];
    let h2Naipe = document.createElement("h2");
    h2Naipe.classList.add("cartas__mesa--naipe");
    h2Naipe.textContent = carta_mesaSelecionada[1];
    let h2ValorDown = document.createElement("h2");
    h2ValorDown.classList.add("cartas__mesa--valor-down");
    h2ValorDown.textContent = carta_mesaSelecionada[0];

    // Adicionando os h2s dentro da div cartas__mesa
    divCartasJogo.appendChild(h2ValorUp);
    divCartasJogo.appendChild(h2Naipe);
    divCartasJogo.appendChild(h2ValorDown);

    let cartas_jogo = document.querySelector(".cartas_usuario");
    cartas_jogo.appendChild(divCartasJogo);
    removeCartas('.cartas');
    contadorCartas++;

    contadorCartasUser++;
});

let contadorCartasPC= 0;

tirar_cartaComputador.addEventListener("click", () => {
    if (contadorCartasPC === 2) {
        alert("O limite de cartas por usuário são 2.");
        return;}

    let divCartasJogo = document.createElement("div");
    divCartasJogo.classList.add("cartas__mesa");

    //Pontuação da Cartas do Computador 
    let valoresCarta = {'K': 10,'J': 10,'Q': 10,'A': 1};
    carta_mesaSelecionada = selecionaCartaMesa(baralho1);
    let valorCarta = valoresCarta[carta_mesaSelecionada[0]] || parseInt(carta_mesaSelecionada[0]);
    valoresTotalComputador = valoresTotalComputador + valorCarta;
    
    let h2ValorUp = document.createElement("h2");
    h2ValorUp.classList.add("cartas__mesa--valor-up");
    h2ValorUp.textContent = carta_mesaSelecionada[0];
    let h2Naipe = document.createElement("h2");
    h2Naipe.classList.add("cartas__mesa--naipe");
    h2Naipe.textContent = carta_mesaSelecionada[1];
    let h2ValorDown = document.createElement("h2");
    h2ValorDown.classList.add("cartas__mesa--valor-down");
    h2ValorDown.textContent = carta_mesaSelecionada[0];

    // Adicionando os h2s dentro da div cartas__mesa
    divCartasJogo.appendChild(h2ValorUp);
    divCartasJogo.appendChild(h2Naipe);
    divCartasJogo.appendChild(h2ValorDown);

    let cartas_jogo = document.querySelector(".cartas_pc");
    cartas_jogo.appendChild(divCartasJogo);
    removeCartas('.cartas');

    contadorCartasPC++;
});


let resultadoJogo = document.getElementById('resultadoJogo')

resultadoJogo.addEventListener('click', ()=>{
    resultado()

})

tutorial_blackjack = document.getElementById('tutorial_blackjack')
tutorial_blackjack.addEventListener('click', ()=>{
    alerta(`Distribuas as Cartas. Compare suas cartas com as do computador através do botão resultado`)
})