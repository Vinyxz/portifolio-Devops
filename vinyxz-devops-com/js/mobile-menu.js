/**
 * Mobile Menu Functionality
 * Handles the mobile menu toggle and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile menu script loaded');
    
    // Get elements
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Verificar se os elementos existem
    if (!mobileMenuBtn) console.error('Botão do menu mobile não encontrado');
    if (!mobileMenuClose) console.error('Botão de fechar menu mobile não encontrado');
    if (!sidebar) console.error('Sidebar não encontrada');
    if (!sidebarOverlay) console.error('Overlay da sidebar não encontrado');
    
    // Function to open mobile menu
    function openMobileMenu() {
        console.log('Abrindo menu mobile');
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }
    
    // Function to close mobile menu
    function closeMobileMenu() {
        console.log('Fechando menu mobile');
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Event listeners
    if (mobileMenuBtn) {
        console.log('Adicionando evento de clique ao botão do menu');
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openMobileMenu();
        });
    }
    
    if (mobileMenuClose) {
        console.log('Adicionando evento de clique ao botão de fechar');
        mobileMenuClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeMobileMenu();
        });
    }
    
    if (sidebarOverlay) {
        console.log('Adicionando evento de clique ao overlay');
        sidebarOverlay.addEventListener('click', function(e) {
            e.preventDefault();
            closeMobileMenu();
        });
    }
    
    // Close mobile menu when clicking a navigation link
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    closeMobileMenu();
                    
                    // Adiciona um pequeno atraso para o scroll suave após fechar o menu
                    setTimeout(() => {
                        const targetId = link.getAttribute('href');
                        if (targetId && targetId.startsWith('#')) {
                            const targetElement = document.querySelector(targetId);
                            if (targetElement) {
                                targetElement.scrollIntoView({ behavior: 'smooth' });
                            }
                        }
                    }, 300);
                }
            });
        });
    }
    
    // Close mobile menu with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Handle resize events - close menu if window is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    console.log('Mobile menu script inicializado com sucesso');
});
