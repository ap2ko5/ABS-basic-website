// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Only prevent default and smooth-scroll for on-page anchor links
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
            // For external links (booking.html, contact.html), the default browser action will proceed.
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.cta-button, .promo-cta-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Don't run ripple if it's a link navigating away
            if (button.tagName === 'A' && button.getAttribute('href')) {
                return;
            }
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
            ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // --- Form Validation ---
    const contactForm = document.getElementById('contact-form');
    const bookingForm = document.getElementById('booking-form');

    if (contactForm) {
        contactForm.addEventListener('submit', e => handleFormSubmit(e, contactForm));
    }
    if (bookingForm) {
        // Set min date for date pickers
        const today = new Date().toISOString().split('T')[0];
        bookingForm.querySelector('#pickup-date').setAttribute('min', today);
        bookingForm.querySelector('#return-date').setAttribute('min', today);
        bookingForm.addEventListener('submit', e => handleFormSubmit(e, bookingForm));
    }
});

function handleFormSubmit(event, form) {
    event.preventDefault();
    if (validateForm(form)) {
        console.log('Form is valid. Submitting...');
        form.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
    } else {
        console.log('Form is invalid.');
    }
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

    inputs.forEach(input => {
        clearError(input);
        if (!input.value.trim()) {
            showError(input, `${input.labels[0].textContent} is required.`);
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            showError(input, 'Please enter a valid email address.');
            isValid = false;
        }
    });

    // Specific check for booking dates
    if (form.id === 'booking-form') {
        const pickupDate = form.querySelector('#pickup-date');
        const returnDate = form.querySelector('#return-date');
        if (pickupDate.value && returnDate.value && new Date(returnDate.value) < new Date(pickupDate.value)) {
            showError(returnDate, 'Return date cannot be before pickup date.');
            isValid = false;
        }
    }

    return isValid;
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('error');
    const errorDiv = formGroup.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.textContent = message;
    }
}

function clearError(input) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.remove('error');
    const errorDiv = formGroup.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.textContent = '';
    }
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}