document.addEventListener("DOMContentLoaded", function() {
    const customButtons = document.querySelectorAll(".custom-button");
    const passionSections = document.querySelectorAll("section[id^='Passion'] > section");

    // Affiche la première section de passion par défaut
    passionSections[0].style.display = "block";

    customButtons.forEach(button => {
        button.addEventListener("click", function() {
            const target = this.getAttribute("data-target");
            passionSections.forEach(section => {
                if (section.id === target) {
                    section.style.display = "block"; // Affiche la section cible
                } else {
                    section.style.display = "none"; // Cache les autres sections
                }
            });
        });
    });
});
