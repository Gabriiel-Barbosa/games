//Pegando o Botão que será usado
const botaoSortearNumero = document.querySelector('bingo__botoes--sortear-numero');

//Array que armazena os numeros sorteados

var sorteados = [];

//Função pra Zerar o array de numeros Sorteados

function zeraSorteados(){
    sorteados.length = 0
    document.querySelector(".sorteio__ultimo-numero").textContent = "ULTIMO NUMERO SORTEADO: ";
    document.querySelector(".sorteio__numeros").textContent = "NUMEROS SORTEADOS: ";
}

//Função que sorteia os números e adiciona os números no arry
function sortearNumero() {
    var numeroSorteado;
    do {
        numeroSorteado = Math.floor(Math.random() * 77) + 1;
    } while (sorteados.includes(numeroSorteado));
    console.log(sorteados.length)

    if(sorteados.length <76){
        console.log(sorteados)
        sorteados.push(numeroSorteado);
        document.querySelector(".sorteio__ultimo-numero").textContent = "ULTIMO NUMERO SORTEADO: " + numeroSorteado;
        document.querySelector(".sorteio__numeros").textContent = "NUMEROS SORTEADOS: " + sorteados.join(", ");
    
    }else{
        alert("Todos os números foram sorteados");
    }
}

// Função que sorteia os números da tabela
var numeros_cartela = [];

function numerosCartela() {
    numeros_cartela.length = 0
    var rangeStart = 1;
    var rangeEnd = 16;
    for (var i = 0; i < 5; i++) {
        var numeros_selecionados = [];
        while (numeros_selecionados.length < 5) {
            var numeroSorteado;
            do {
                numeroSorteado = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
            } while (numeros_selecionados.includes(numeroSorteado));
            numeros_selecionados.push(numeroSorteado);
        }
        numeros_cartela.push(numeros_selecionados);
        rangeStart += 16;
        rangeEnd += 16;
    }
    console.log(numeros_cartela);
}
let cartela = numeros_cartela;

// Função adiciona os números na tabela
function sortearTabela(){
    let tabela = document.getElementById("tabela_sorteada");

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

        cell1.innerHTML = cartela[0][i];
        cell2.innerHTML = cartela[1][i];
        cell3.innerHTML = cartela[2][i];
        cell4.innerHTML = cartela[3][i];
        cell5.innerHTML = cartela[4][i];
    }
}
