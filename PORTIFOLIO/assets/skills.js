const carouselButton = document.getElementById('carouselButton');

  // Função para ativar o carrossel automaticamente
  function ativarCarrossel() {
    const carousel = new bootstrap.Carousel(document.querySelector(carouselButton.getAttribute('data-bs-target')));
    carousel.to(carouselButton.getAttribute('data-bs-slide-to'));
  }

  // Chama a função para ativar o carrossel automaticamente inicialmente
  ativarCarrossel();

  // Define a ativação do carrossel a cada 5 segundos
  setInterval(ativarCarrossel, 5000);
