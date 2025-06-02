// Script para ativar animações quando os elementos entrarem no campo de visão

document.addEventListener('DOMContentLoaded', function() {
    // Função para verificar se um elemento está visível na tela
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Função para verificar se um elemento está parcialmente visível
    function isElementPartiallyVisible(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        
        // Verifica se pelo menos uma parte do elemento está visível
        const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
        
        return (vertInView && horInView);
    }

    // Seleciona todos os elementos com classes de animação
    const animatedElements = document.querySelectorAll('.animated');
    
    // Função para verificar e ativar animações
    function checkAnimations() {
        animatedElements.forEach(function(element) {
            if (isElementPartiallyVisible(element)) {
                // Verifica se o elemento já tem a classe 'animated-visible'
                if (!element.classList.contains('animated-visible')) {
                    // Adiciona a classe para manter o estado de animação
                    element.classList.add('animated-visible');
                }
            }
        });
    }

    // Verifica as animações quando a página carrega
    checkAnimations();
    
    // Verifica as animações durante o scroll
    window.addEventListener('scroll', checkAnimations);
    
    // Também verifica quando a janela é redimensionada
    window.addEventListener('resize', checkAnimations);
});

// Animação para elementos com data-animation
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classes de animação aos elementos com data-animation
    const elementsToAnimate = document.querySelectorAll('[data-animation]');
    
    elementsToAnimate.forEach(function(element) {
        const animationType = element.getAttribute('data-animation');
        const delay = element.getAttribute('data-delay');
        
        element.classList.add('animated', animationType);
        
        if (delay) {
            element.classList.add('delay-' + delay);
        }
    });
});
