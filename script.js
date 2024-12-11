// Seleciona os elementos necessários
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

// Alterna o menu móvel ao clicar no botão
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
});

// Fecha o menu móvel ao clicar em um link
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});



