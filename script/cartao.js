const cards = document.querySelectorAll(".card-container");

function checarScroll() {
  const alturaTela = window.innerHeight;

  // Passamos por cada card individualmente
  cards.forEach((card) => {
    const posicaoCard = card.getBoundingClientRect().top;

    // Se o topo deste card específico estiver acima de 75% da tela, ele vira
    if (posicaoCard < alturaTela * 0.75) {
      card.classList.add("virado");
    } else {
      card.classList.remove("virado");
    }
  });
}

// Ouve o evento de scroll e executa a função logo ao carregar a página
window.addEventListener("scroll", checarScroll);
checarScroll();
