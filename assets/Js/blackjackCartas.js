//Evento para quando o botão de "tirar carta" é clicado
tirar_cartaMesa.addEventListener("click",()=>{
    if (contadorCartas == 0 || contadorCartas == 1 ) {
        alert("Você ainda anão possi cartas, por favor, receba suas duas carta");
        return;
        
    } else {
         //Criando a div com a classe cartas__mesa
    let divMesa = document.createElement("div");
    divMesa.classList.add("cartas__mesa");

    //Pegando a Carta
    carta_mesaSelecionada = selecionaCartaMesa(baralho1)
    exemplo = parseInt(carta_mesaSelecionada[0])

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

let contadorCartas = 0;

let tirar_cartaUsuario = document.getElementById("receberCarta");
let tirar_cartaComputador = document.getElementById("receberCarta");

tirar_cartaUsuario.addEventListener("click", () => {
    //if (contadorCartas === 2) {
        //alert("O limite de cartas por usuário são 2.");
        //return;}

    let divCartasJogo = document.createElement("div");
    divCartasJogo.classList.add("cartas__mesa");

    carta_mesaSelecionada = selecionaCartaMesa(baralho1);

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
});

//Criando Cartas PC

tirar_cartaComputador.addEventListener("click", () => {
    //if (contadorCartas === 2) {
        //alert("O limite de cartas por usuário são 2.");
        //return;}

    let divCartasJogo = document.createElement("div");
    divCartasJogo.classList.add("cartas__mesa");

    carta_mesaSelecionada = selecionaCartaMesa(baralho1);

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

contadorCartas++;
});
