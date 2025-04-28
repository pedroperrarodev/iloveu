function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');
    document.body.appendChild(coracao);

    // Faz com que o coração apareça em uma posição aleatória na tela
    coracao.style.left = Math.random() * window.innerWidth + 'px';
    coracao.style.top = -100 + 'px'; // Começa de cima da tela

    // Faz com que o coração caia de forma aleatória
    coracao.style.animationDuration = Math.random() * 5 + 3 + 's'; // Tempo de animação aleatório

    // Remove o coração após a animação
    setTimeout(() => {
      coracao.remove();
    }, 8000); // Tempo máximo da animação
  }

  // Cria um coração a cada 500ms
  setInterval(criarCoracao, 500);