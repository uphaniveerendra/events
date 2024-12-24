// Mobile menu toggle functionality
const mobileToggle = document.getElementById('mobile-toggle');
const menu = document.querySelector('.menu');

mobileToggle.addEventListener('click', function () {
    menu.classList.toggle('open'); // Add or remove the 'open' class to toggle visibility
});


// Smooth animation trigger on scroll
document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll(".feature");

    const animateOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;

        features.forEach((feature) => {
            const boxTop = feature.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                feature.style.opacity = "1";
                feature.style.transform = "translateY(0)";
            }
        });
    };

    // Listen for scroll events
    window.addEventListener("scroll", animateOnScroll);
});
const toggleButton = document.getElementById('mobile-toggle');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});



