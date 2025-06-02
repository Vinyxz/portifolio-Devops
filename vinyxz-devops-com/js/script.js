// Array de projetos para portfólio
const projects = [
  {
    "title": "Infraestrutura com Terraform e DevOps",
    "image": "images/terraform_devops.png",
    "description": "Projeto de automação e provisionamento de infraestrutura usando Terraform, com foco em práticas DevOps e infraestrutura como código.",
    "responsibilities": ["Terraform", "Automação", "Infraestrutura como Código", "DevOps"],
    "link": "https://github.com/Vinyxz/terraform_devops.git"
  },
  {
    "title": "Sistema de Recomendação de Livros",
    "image": "images/sistema_recomendacao_livros.png",
    "description": "Sistema que utiliza algoritmos para recomendar livros com base no perfil do usuário e preferências anteriores.",
    "responsibilities": ["Python", "Machine Learning", "Algoritmos de Recomendação", "Backend"],
    "link": "https://github.com/Vinyxz/sistema-recomendacao-livros.git"
  },
  {
    "title": "Projeto Estácio - Sistema Web",
    "image": "images/trabalho_estacio.png",
    "description": "Projeto acadêmico para desenvolvimento de sistema web, contemplando front-end e back-end com funcionalidades básicas.",
    "responsibilities": ["Desenvolvimento Web", "Frontend", "Backend", "Integração"],
    "link": "https://github.com/Vinyxz/trabalhoEstacio.git"
  },
  {
    "title": "Automação de Processos",
    "image": "images/automacao.png",
    "description": "Automação de tarefas utilizando scripts Python para otimizar processos repetitivos e aumentar eficiência operacional.",
    "responsibilities": ["Python", "Automação", "Scripting", "Otimização"],
    "link": "https://github.com/Vinyxz/automa-o.git"
  },
  {
    "title": "Bot Penelope",
    "image": "images/bot_penelope.png",
    "description": "Desenvolvimento de bot para atendimento automatizado com funcionalidades inteligentes para suporte ao usuário.",
    "responsibilities": ["Chatbot", "Python", "Integração APIs", "Automação"],
    "link": "https://github.com/Vinyxz/bot-penelope.git"
  },
  {
    "title": "Assistente Virtual Python",
    "image": "images/assistente_virtual_py.png",
    "description": "Assistente virtual desenvolvido em Python com reconhecimento de voz e comandos para execução de tarefas.",
    "responsibilities": ["Python", "Reconhecimento de Voz", "Automação", "Assistente Virtual"],
    "link": "https://github.com/Vinyxz/assistente-virtual-py.git"
  },
  {
    "title": "Projeto Anime Hover",
    "image": "images/anime_hover.png",
    "description": "Projeto front-end que cria efeitos visuais para sites, especialmente para elementos relacionados a animes.",
    "responsibilities": ["HTML", "CSS", "JavaScript", "Design Visual"],
    "link": "https://github.com/Vinyxz/anime.hover.git"
  },
  {
    "title": "Página de Galerias",
    "image": "images/pagina_de_galerias.png",
    "description": "Desenvolvimento de página web para exibição e organização de galerias de imagens com interface responsiva.",
    "responsibilities": ["HTML", "CSS", "JavaScript", "Frontend"],
    "link": "https://github.com/Vinyxz/Pagina-de-galerias.git"
  },
  {
    "title": "Jogo de Lógica",
    "image": "images/projeto_jogo_de_logica.png",
    "description": "Projeto de jogo simples focado em lógica e raciocínio, desenvolvido para fins educacionais e de entretenimento.",
    "responsibilities": ["Game Design", "Programação", "JavaScript", "Frontend"],
    "link": "https://github.com/Vinyxz/projeto-jogo-de-logica-.git"
  }
];

// Variáveis do carrossel de projetos
const carouselTrack = document.querySelector('.carousel-track');
const carouselIndicators = document.querySelector('.carousel-indicators');
let currentSlide = 0;
let slideWidth = 0;
let totalSlides = 0;

// Popula o carrossel com os cards dos projetos
if (carouselTrack && carouselIndicators) {
  projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'game-card';
    if (index === 0) projectCard.classList.add('active');

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="game-image" />
      <div class="game-info">
        <h3 class="game-title">${project.title}</h3>
      </div>
    `;

    projectCard.addEventListener('click', () => openModal(project));
    carouselTrack.appendChild(projectCard);

    const indicator = document.createElement('div');
    indicator.className = 'carousel-indicator';
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToSlide(index));
    carouselIndicators.appendChild(indicator);
  });
} else {
  console.error('Elementos do carrossel de projetos não encontrados.');
}

// Funções do carrossel
function updateCarousel() {
  const containerWidth = carouselTrack.parentElement.offsetWidth;
  const cardWidth = 300;
  const cardMargin = 15;
  const totalCardWidth = cardWidth + (cardMargin * 2);

  totalSlides = projects.length;

  const slides = carouselTrack.querySelectorAll('.game-card');
  slides.forEach(slide => {
    slide.style.flex = `0 0 ${cardWidth}px`;
    slide.style.margin = `0 ${cardMargin}px`;
  });

  slideWidth = totalCardWidth;
  goToSlide(currentSlide);
}

function goToSlide(slideIndex) {
  if (slideIndex < 0) slideIndex = 0;
  if (slideIndex >= totalSlides) slideIndex = totalSlides - 1;

  currentSlide = slideIndex;

  const containerWidth = carouselTrack.parentElement.offsetWidth;
  const centerPosition = containerWidth / 2;
  const slidePosition = slideIndex * slideWidth + (slideWidth / 2);
  const offset = centerPosition - slidePosition;

  carouselTrack.style.transform = `translateX(${offset}px)`;

  const indicators = carouselIndicators.querySelectorAll('.carousel-indicator');
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === slideIndex);
  });

  const cards = carouselTrack.querySelectorAll('.game-card');
  cards.forEach((card, index) => {
    card.classList.toggle('active', index === slideIndex);
  });
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

// Eventos dos botões do carrossel
document.querySelector('.prev-button').addEventListener('click', prevSlide);
document.querySelector('.next-button').addEventListener('click', nextSlide);

window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);

// Modal do projeto
const modal = document.getElementById('gameModal');

function openModal(project) {
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalImage').src = project.image;
  document.getElementById('modalImage').alt = project.title;
  document.getElementById('modalDescription').textContent = project.description;
  document.getElementById('modalLink').href = project.link;
  document.getElementById('modalLink').innerHTML = `Ver Projeto <i class="fas fa-external-link-alt"></i>`;

  const responsibilitiesGrid = document.getElementById('modalResponsibilities');
  responsibilitiesGrid.innerHTML = project.responsibilities.map(resp =>
    `<div class="responsibility-item">${resp}</div>`
  ).join('');

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Fechar modal clicando fora dele
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Botão para compartilhar - mantém seu código se quiser
function shareGame() {
  const gameTitle = document.getElementById('modalTitle').textContent;
  const gameLink = document.getElementById('modalLink').href;

  if (navigator.share) {
    navigator.share({
      title: `Projeto: ${gameTitle} - Portfólio Vinícius Marques`,
      text: `Confira este projeto incrível: ${gameTitle}`,
      url: gameLink
    }).catch(console.error);
  } else {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = gameLink;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert(`Link do projeto ${gameTitle} copiado para a área de transferência!`);
  }
}
