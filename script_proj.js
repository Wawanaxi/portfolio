document.addEventListener("DOMContentLoaded", function() {
    const customButtons = document.querySelectorAll(".custom-button");
    const experienceSections = document.querySelectorAll("section[id^='Projet'] > section");

    // Affiche la première section d'expérience par défaut
    experienceSections[0].style.display = "block";

    customButtons.forEach(button => {
        button.addEventListener("click", function() {
            const target = this.getAttribute("data-target");
            experienceSections.forEach(section => {
                if (section.id === target) {
                    section.style.display = "block"; // Affiche la section cible
                } else {
                    section.style.display = "none"; // Cache les autres sections
                }
            });
        });
    });
});
