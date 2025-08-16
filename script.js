function gerarTabuada() {
    const numero = document.getElementById('numero').value;
    let resultado = '';
    const erroDiv = document.getElementById('erro');
    erroDiv.innerHTML = ''; // Limpa mensagens de erro anteriores

    // Verifica se a entrada é um número válido
    if (isNaN(numero) || numero < 1 || numero > 10) {
        erroDiv.innerHTML = 'Por favor, insira um número válido entre 1 e 10.';
        return; // Sai da função se a entrada for inválida
    }

    // Calcula a tabuada se a entrada for válida
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }

    document.getElementById('resultado').innerHTML = resultado;

    // Adiciona confete na tela
    adicionarConfete();
}

function adicionarConfete() {
    const confeteContainer = document.getElementById('confete-container');

    for (let i = 0; i < 30; i++) { // Número de confetes
        const confete = document.createElement('div');
        confete.className = 'confete';

        // Define a posição aleatória
        confete.style.left = Math.random() * 100 + 'vw'; // Largura da tela
        confete.style.animationDelay = Math.random() * 2 + 's'; // Atraso aleatório

        confeteContainer.appendChild(confete);

        // Remove o confete após a animação
        setTimeout(() => {
            confeteContainer.removeChild(confete);
        }, 2000); // Tempo da animação
    }
}


