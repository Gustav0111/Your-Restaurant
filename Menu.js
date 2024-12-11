console.log('JavaScript carregado');
// Seleciona os elementos necessários
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('.mobile-menu');

// Alterna o menu móvel ao clicar no botão
hamburger.addEventListener('click', () => {
    // Alterna a classe 'active' no navbar
    navbar.classList.toggle('active');
    
    // Alterna o valor de 'aria-expanded' para refletir o estado do menu
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
});

// Fecha o menu ao clicar em um link
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});



const serv = document.querySelectorAll('.serv');
const oc = document.querySelectorAll('.oc');

// Adiciona evento a cada botão
serv.forEach((button, index) => {
    button.addEventListener('click', () => {
        const content = oc[index]; // Obtém o conteúdo relacionado ao botão clicado

        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden'); // Mostra o conteúdo
        } else {
            content.classList.add('hidden');    // Oculta o conteúdo
        }
    });
});