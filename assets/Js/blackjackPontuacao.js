let valorTotalCartasMesa = 0
let valoresTotalComputador = 0
let valoresTotalUser = 0


let pontosUsuario = 0;
let pontosComputador = 0;

const spanpontosUsuario = document.querySelector('.pontos__usuario');
const spanpontosComputador = document.querySelector('.pontos__computador');


function resultado(){
    valoresTotalUser = valoresTotalUser + valorTotalCartasMesa
    console.log(valoresTotalUser)
    if (valoresTotalUser <= 21 ) {
        if (valoresTotalUser > valoresTotalComputador ) {
            alert('Parabéns, você venceu!! Você fez: '+ valoresTotalUser +' pontos')
            pontosUsuario += 1
            spanpontosUsuario.innerHTML = pontosUsuario
            reiniciarJogo()
        } else {  
            alert('Você perdeu. Sua pontuação foi: ' + valoresTotalUser )
            pontosComputador += 1
            spanpontosComputador.innerHTML = pontosComputador
            reiniciarJogo()
        }     
    } else {
        alert('Você estorou a pontuação máxima. Vitória do Computador!!!')
        pontosComputador += 1
        spanpontosComputador.innerHTML = pontosComputador
        reiniciarJogo()  
    }
}
