document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Random cat fact generator
    const catFacts = [
        "Katte har over 20 lyde, de kan lave med deres stemme.",
        "En kats hjerte slår næsten dobbelt så hurtigt som et menneskes.",
        "Katte bruger deres whiskers til at måle, om de kan passe gennem en åbning.",
        "Den første kat i rummet var en fransk kat ved navn Felicette i 1963.",
        "Katte kan ikke smage søde ting.",
    ];

    const factContainer = document.querySelector('.quick-tips');
    if (factContainer) {
        const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
        const factElement = document.createElement('div');
        factElement.classList.add('tip');
        factElement.innerHTML = `<i class="fas fa-lightbulb"></i><p>${randomFact}</p>`;
        factContainer.appendChild(factElement);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Back to Top button functionality
    var backToTopButton = document.getElementById("back-to-top");

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add any additional JavaScript functionality here
});