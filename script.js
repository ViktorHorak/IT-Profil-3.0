// Cursor Glow Effect
const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    cursorGlow.style.left = `${clientX}px`;
    cursorGlow.style.top = `${clientY}px`;
});

// Scroll Reveal Animation (Simple version)
const revealElements = document.querySelectorAll('section, .project-card, .gallery-item');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerBottom) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Initial styles for reveal animation
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lucide icons are initialized in the HTML
