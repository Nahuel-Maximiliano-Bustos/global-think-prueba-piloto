// ========== SCROLL SUAVE ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
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

// ========== VALIDACIÓN FORMULARIO DE CONTACTO ==========
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = contactForm.querySelector('input[name="name"]');
        const email = contactForm.querySelector('input[name="email"]');
        const message = contactForm.querySelector('textarea[name="message"]');

        if (!name.value || !email.value || !message.value) {
            alert('Por favor, completá todos los campos.');
            return;
        }

        // Simulación de envío exitoso
        alert('¡Gracias por contactarte! Te responderemos pronto.');
        contactForm.reset();
    });
}

// ========== VALIDACIÓN FORMULARIO HERO ==========
const heroForm = document.getElementById('hero-form');
if (heroForm) {
    heroForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const nombre = heroForm.querySelector('input[name="nombre"]');
        const email = heroForm.querySelector('input[name="email"]');
        const proyecto = heroForm.querySelector('input[name="proyecto"]');

        if (!nombre.value || !email.value || !proyecto.value) {
            alert('Completá todos los campos para solicitar tu presupuesto.');
            return;
        }

        // Simulación de envío exitoso
        alert('¡Presupuesto solicitado correctamente! Nos pondremos en contacto.');
        heroForm.reset();
    });
}

// ========== ANIMACIONES FUTURAS ==========

// Ejemplo: animar al hacer scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

fadeInElements.forEach(el => observer.observe(el));

