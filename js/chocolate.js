function openPanel() {
    // Mordendo o chocolate (alterando o estilo)
    document.querySelector('.chocolate-button').classList.add('mordido');
    
    // Abrindo o painel com a mensagem
    document.getElementById('message-panel').style.display = 'block';
}

function closePanel() {
    // Fechando o painel
    document.getElementById('message-panel').style.display = 'none';
}



function showBalloon() {
    // Exibe o balão
    document.getElementById('balloon').style.display = 'block';
}

function hideBalloon() {
    // Esconde o balão
    document.getElementById('balloon').style.display = 'none';
}
