//Pegando o Botão que será usado para sortear os números
const botaoSortearNumero = document.querySelector('bingo__botoes--sortear-numero');

//Função que sorteia os números e adiciona os números no array sorteados
function sortearNumero() {
    var numeroSorteado;
    do {
        // o * 77 é para que o alerta seja disparado e a página não trave
        numeroSorteado = Math.floor(Math.random() * 77) + 1;
    } while (sorteados.includes(numeroSorteado));
    if(sorteados.length <76 && numeroSorteado <= 75){
        sorteados.push(numeroSorteado);
        document.querySelector(".sorteio__ultimo-numero").textContent = "ULTIMO NUMERO SORTEADO: " + numeroSorteado;
        document.querySelector(".sorteio__numeros").textContent = "NUMEROS SORTEADOS: " + sorteados.join(", ");
    }else if(sorteados.length == 75){
        alert("Todos os números foram sorteados");
    }
}
//Array que armazena os numeros sorteados
var sorteados = [];

//Função pra Zerar o array com os numeros Sorteados
function zeraSorteados(){
    sorteados.length = 0
    document.querySelector(".sorteio__ultimo-numero").textContent = "ULTIMO NUMERO SORTEADO: ";
    document.querySelector(".sorteio__numeros").textContent = "NUMEROS SORTEADOS: ";
}

// Arrays da Tabelas 
var numeros_cartelaUser = [];
var numeros_cartelaComputador = [];

// Função que define o os intervalos que serão interados na tabela . Ela também adiciona os interáveis
function sortearIntervalo(rangeStart, rangeEnd, cartela) {
    var numeros_selecionados = [];
    while (numeros_selecionados.length < 5) {
        var numeroSorteado;
        do {
            numeroSorteado = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
        } while (numeros_selecionados.includes(numeroSorteado));
        numeros_selecionados.push(numeroSorteado);
    }
    cartela.push(numeros_selecionados);
}

//Chamada da função para prrencher a tabela do Usuário
function numerosCartela(cartela_srt) {
    cartela_srt.length = 0
    for (var i = 0; i < 5; i++) {
        if (i == 0) {
            sortearIntervalo(1, 15, cartela_srt);
        } else if (i == 1) {
            sortearIntervalo(16, 30, cartela_srt);
        } else if (i == 2) {
            sortearIntervalo(31, 45, cartela_srt);
        } else if (i == 3) {
            sortearIntervalo(46, 60, cartela_srt);
        } else if (i == 4) {
            sortearIntervalo(61, 75, cartela_srt);
        }
    }   
}

// Tabelas que serão interadas
let tabela_user = document.getElementById("tabela_sorteada-user");
let tabela_computador = document.getElementById("tabela_sorteada-computador");

// Função adiciona os números na tabela
function sortearTabela(tabela, cartela_numeros){    
    /*Limpa a tabela caso já tenha itens na mesma*/
    while (tabela.rows.length > 0) {
        tabela.deleteRow(0);
    }
    for (let i = 0; i < 5; i++) {

        let row = tabela.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell();
        let cell5 = row.insertCell();

        cell1.innerHTML = cartela_numeros[0][i];
        cell2.innerHTML = cartela_numeros[1][i];
        cell3.innerHTML = cartela_numeros[2][i];
        cell4.innerHTML = cartela_numeros[3][i];
        cell5.innerHTML = cartela_numeros[4][i];
    }
}

//Bloco de código  para interação do user com a tabela(Marcar os campos sorteados de vermelho )
let contador_user = 0
let  tabela_click = document.getElementById("tabela_sorteada-user")
tabela_click.onclick = function(event){    
    let campo_clicado = event.target;
    console.log(campo_clicado)
    if(event.target.tagName === 'TD') {
        let campo_clicado = event.target;
        console.log(sorteados.includes(campo_clicado.innerHTML))
        if (sorteados.includes(parseInt(campo_clicado.innerHTML))) { 
            campo_clicado.style.backgroundColor = "red";
            contador_user = contador_user + 1
        console.log(contador)
            if(contador_user == 25){
                alert("BINGOOOOOOOOOOO!!!PARABÉNS, VOCÊ VENCEU")
            }

        }  else {
            alert("Esse número ainda não foi sorteado!")
        }
    }
}

// Pega todos os TD da tabela do computador
let celulas = document.getElementById("tabela_sorteada-computador").getElementsByTagName("td")

// Função - Marca automaticamente com a cor vermelha, na tabela, os números sorteados!
function ponteiaTabela(){
    let contador = 0;
    for (let celula of celulas) {
        let numero_celula = parseInt(celula.innerHTML);
        if (sorteados.includes(numero_celula)) {
            celula.style.backgroundColor = "red";
            contador++;
        }
    }
    if(contador == 25){
        alert("BINGOOOOOOOOOOO, mas para o computador. Tente na Próxima!!!")
    }
}