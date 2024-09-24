// Fonction pour le défilement doux
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner tous les liens avec un href commençant par #
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            
            // Sélectionner la cible de l'ancre
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Défilement doux vers la cible
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // Défilement doux
                });
            }
        });
    });
});