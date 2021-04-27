const calcular = document.getElementById('calcularIMC');
const altura = document.getElementById('altura').value; // Valor da Altura
const peso = document.getElementById('peso').value;    // Valor do Peso
const resultado = document.getElementById('saida'); // Campo do resultado

function calcularIMC() {
    

    if (altura == '' || peso == '') { // Alerta 
        alert('Preencha todos os campos');
    }

    else if (altura !== '' && peso !== '') {

        let valorIMC = (peso / (altura ** 2)).toFixed(1); // Calculo do IMC

        // Masculino 
        let homem = document.getElementById('masculino').checked = true;
        let mulher = document.getElementById('feminino').checked = true;

        if (homem){ // Masculino

            if (valorIMC < 19) {
                resultado.textContent = 'Abaixo do Peso';// Resultado
                document.querySelector('#resultado').style.background = "yellow";//Cor do Background.
                document.querySelector('#resultado').style.color = "black";//Cor do texto diferente dos demais.
            }
            else if (valorIMC < 25.7){
                resultado.textContent = 'Peso Normal';//Texto da situação.
                document.querySelector('#resultado').style.background = "green";//Cor do Background.
            }
            else if (valorIMC < 27.3){
                resultado.textContent = 'Marginalmente Acima do Peso';//Texto da situação.
                document.querySelector('#resultado').style.background = "peru";//Cor do Background.
            }
            else if (valorIMC < 32.3){
                resultado.textContent = 'Acima do Peso Ideal';//Texto da situação.
                document.querySelector('#resultado').style.background = "orange";//Cor do Background.
            }
            else {
                resultado.textContent = 'Obeso';//Texto da situação.
                document.querySelector('#resultado').style.background = "red";//Cor do Background.
            }
        }

        
        else{ // Feminino 
            
            if (valorIMC < 19) {
                resultado.textContent = 'Abaixo do Peso';//Texto da situação.
                document.querySelector('#resultado').style.background = "yellow";//Cor do Background.
                document.querySelector('#resultado').style.color = "black";//Cor do texto diferente dos demais.
            }
            else if (valorIMC < 25.8){
                resultado.textContent = 'Peso Normal';//Texto da situação.
                document.querySelector('#resultado').style.background = "green";//Cor do Background.
            }
            else if (valorIMC < 27.3){
                resultado.textContent = 'Marginalmente Acima do Peso';//Texto da situação.
                document.querySelector('#resultado').style.background = "peru";//Cor do Background.
            }
            else if (valorIMC < 32.3){
                resultado.textContent = 'Acima do Peso Ideal';//Texto da situação.
                document.querySelector('#resultado').style.background = "orange";//Cor do Background.
            }
            else {
                resultado.textContent = 'Obeso';//Texto da situação.
                document.querySelector('#resultado').style.background = "red";//Cor do Background.
            } 
        }
        
    }
}