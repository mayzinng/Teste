function glasses() {
    if(lente.value >= -12 && lente.value <= -3 && lente2.value >= -12 && lente2.value <= -3) {
        let result = 'Você usará lente prime'

        document.getElementById('resultado').innerText = result
    } else if((lente.value < -15 || lente.value > 0) || (lente2.value < -15 || lente2.value > 0)) {
        let aviso = 'Valores que podem ser digitados são entre -15 e 0'
        
        document.getElementById('aviso').innerText = aviso
        lente.value = ''
        lente2.value = ''
    }
    
    if(lente3.value == -2 && lente.value >= -10 && lente.value <= -3 
        && lente2.value >= -10 && lente2.value <= -3) {
            let result2 = 'Você usará lente prime'

            document.getElementById('resultado').innerText = result2
    } else if((lente3.value < -6 ) || (lente4.value < -6)) {
        let aviso = 'Valores que podem ser digitados tem como limite até o -6'
        
        document.getElementById('aviso2').innerText = aviso
        lente3.value = ''
        lente4.value = ''
    }

    if((lente.value <= 0 && lente.value >= -15 && lente2.value <= 0 && lente2.value >= -15) && (
        lente3.value <= -5  && lente4.value <= -5)) {

        let result3 = 'Você usará lente vision'

        document.getElementById('resultado').innerText = result3
        }

    let calculoGrauEsfEsquerdo = lente.value * 0.25
    let calculoGrauEsfDireito = lente2.value * 0.25
    let calculoGrauCilEsquerdo = lente3.value * 0.25
    let calculoGrauCilDireito = lente4.value * 0.25

    let calculo = 'Os seus graus são cilíndrico esquerdo é: '+calculoGrauCilEsquerdo+ '<br/> O direito é: ' + calculoGrauCilDireito + '<br/> O grau esférico esquerdo é: ' + calculoGrauEsfEsquerdo + '<br/> O direito é: ' + calculoGrauEsfDireito


    document.getElementById('calculo').innerHTML = calculo
    
}

let lente = document.querySelector('#tipoLente')
let lente2 = document.querySelector('#tipoLente2')
let lente3 = document.querySelector('#tipoLente3')
let lente4 = document.querySelector('#tipoLente4')




let button = document.querySelector('#enviar')



button.onclick = function() {
    glasses()

};

// glasses(1)

// Lente prime apenas se o usuário tiver graus esférico, entre os graus -3 e -12
// Além disso só atende grau cilindrico -2, porém se o usuário 
// apresentar grau cilindrico ele passa a atender grau esférico entre -3 e -10
// Lente vision é p 0 até -15 esférico e até -5 de cilindrico 
// Quando a lente prime está disponível ela deve ser a única exibida para o usuário
// O rau limite que o usuário pode inserir é de 0 a -15 para
//  esférico e - 6 para cilindrico
// 0,25 em 0,25