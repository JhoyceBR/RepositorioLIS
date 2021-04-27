const calcular = document.getElementById('calcularIMC');

function calcularIMC() {
    const altura = document.getElementById('altura').value; // Valor da Altura
    const peso = document.getElementById('peso').value;    // Valor do Peso
    const resultado = document.getElementById('saida'); // Campo do resultado

    if (altura == '' || peso == '') { // Alerta
        resultado.textContent = 'Preencha todos os campos';
        document.querySelector('#saida').style.background = 'red';
        document.querySelector('#saida').style.color = 'white';
    }

    else if (altura !== '' && peso !== '') {

        let valorIMC = (peso / (altura ** 2)).toFixed(1); // Calculo do IMC

        let sexo = document.getElementsByName('sexo');

        if (sexo[0].checked) { // Masculino
            if (valorIMC < 19) {
                resultado.textContent = 'Abaixo do Peso'; // Resultado
                document.querySelector('#saida').style.background = "yellow"; // Cor do fundo
                document.querySelector('#saida').style.color = "black"; // Cor do texto
            }
            else if (valorIMC < 25.7) {
                resultado.textContent = 'Peso Normal';// Resultado
                document.querySelector('#saida').style.background = "green"; // Cor do fundo
            }
            else if (valorIMC < 27.3) {
                resultado.textContent = 'Marginalmente Acima do Peso'; // Resultado
                document.querySelector('#saida').style.background = "peru"; // Cor do fundo
            }
            else if (valorIMC < 32.3) {
                resultado.textContent = 'Acima do Peso Ideal'; // Resultado
                document.querySelector('#saida').style.background = "orange"; // Cor do fundo
            }
            else {
                resultado.textContent = 'Obeso';// Resultado
                document.querySelector('#saida').style.background = "red"; // Cor do fundo
            }
        }


        else { // Feminino
            if (valorIMC < 19) {
                resultado.textContent = 'Abaixo do Peso'; // Resultado
                document.querySelector('#saida').style.background = "yellow"; // Cor do fundo
                document.querySelector('#saida').style.color = "black"; // Cor do texto
            }
            else if (valorIMC < 25.8) {
                resultado.textContent = 'Peso Normal'; // Resultado
                document.querySelector('#saida').style.background = "green"; // Cor do fundo
            }
            else if (valorIMC < 27.3) {
                resultado.textContent = 'Marginalmente Acima do Peso'; // Resultado
                document.querySelector('#saida').style.background = "peru"; // Cor do fundo
            }
            else if (valorIMC < 32.3) {
                resultado.textContent = 'Acima do Peso Ideal'; // Resultado
                document.querySelector('#saida').style.background = "orange"; // Cor do fundo
            }
            else {
                resultado.textContent = 'Obeso'; // Resultado
                document.querySelector('#saida').style.background = "red"; // Cor do fundo
            }
        }

    }
}
