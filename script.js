document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        fetch('https://formspree.io/f/your-form-id', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                formMessage.textContent = "Thank you for your message! I'll get back to you soon.";
                formMessage.style.color = 'green';
                contactForm.reset();
            } else {
                formMessage.textContent = "Oops! There was a problem submitting your form. Please try again.";
                formMessage.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            formMessage.textContent = "Oops! There was a problem submitting your form. Please try again.";
            formMessage.style.color = 'red';
        });
    });
});

