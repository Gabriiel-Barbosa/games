let valorTotalCartasMesa = 0
let valoresTotalComputador = 0
let valoresTotalUser = 0


function resultado(){
    valoresTotalUser = valoresTotalUser + valorTotalCartasMesa
    if (valoresTotalUser <= 21 ) {
        if (valoresTotalUser > valoresTotalComputador ) {
            alert('Parabéns, você venceu. Você fez: '+ valoresTotalUser +' pontos')
            
        } else {
            
            alert('Você perdeu. Sua pontuação foi: ' + valoresTotalUser )
        }
        
    } else {
        alert('Você estorou a pontuação máxima. Vitória do Computador!!!')     
    }

    reiniciarJogo()
}
