// script.js
document.addEventListener('DOMContentLoaded', () => {
    const petals = document.querySelectorAll('.petal');
    petals.forEach((petal, index) => {
        petal.style.animationDelay = `${index * 0.5}s`;
    });
});
