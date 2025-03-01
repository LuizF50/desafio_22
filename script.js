function divisiveisPorTres(array) {
    return array
        .filter(num => num % 3 === 0)
        .sort((a, b) => a - b);
}

function encontrarDivisiveisPorTres() {
    const input = document.getElementById('inputArray').value;
    const array = input.split(',').map(num => parseInt(num.trim()));
    
    if (array.some(isNaN)) {
        document.getElementById('resultado').textContent = "Por favor, insira apenas números válidos!";
        return;
    }

    const resultado = divisiveisPorTres(array);
    document.getElementById('resultado').textContent = 
        resultado.length > 0 ? `Números divisíveis por 3: ${resultado.join(', ')}` : "Nenhum número divisível por 3 encontrado!";
}
