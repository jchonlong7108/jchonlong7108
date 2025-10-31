document.addEventListener('DOMContentLoaded', function() {

    // CÓDIGO DE EMAILJS
    (function(){
        emailjs.init({
          publicKey: "0nvXDU33Ga6ui1E76",
        });
    })();

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        const feedbackEl = document.getElementById('form-feedback');

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const submitButton = this.querySelector('button[type="submit"]');
            feedbackEl.innerHTML = '<span class="text-primary">Enviando...</span>';
            submitButton.disabled = true; 

            emailjs.sendForm('service_qvioe16', 'template_2gbgyr8', this)
                .then(function(response) {
                    feedbackEl.innerHTML = '<span class="text-success">¡Mensaje enviado con éxito!</span>';
                    contactForm.reset(); 
                    submitButton.disabled = false;
                }, function(error) {
                    feedbackEl.innerHTML = '<span class="text-danger">Error al enviar. Intenta de nuevo.</span>';
                    submitButton.disabled = false;
                });
        });
    }

    // NAVBAR MÓVIL
    const navMenu = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(navMenu, { toggle: false });

    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
        if (!link.classList.contains('dropdown-toggle')) {
            link.addEventListener('click', function () {
                if (navMenu.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        }
    });
    
    document.addEventListener('click', function (event) {
        const isClickInsideNavbar = event.target.closest('.navbar');        
        
        if (!isClickInsideNavbar && navMenu.classList.contains('show')) {
            bsCollapse.hide();
        }
    });
});