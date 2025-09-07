document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    const successMessage = document.getElementById('success-message');
    const bookingContainer = document.querySelector('.booking-container');

    if (!form) return;

    const fields = {
        fullName: document.getElementById('fullName'),
        email: document.getElementById('email'),
        phone: document.getElementById('phone'),
        car: document.getElementById('car-select'),
        pickupDate: document.getElementById('pickup-date'),
        returnDate: document.getElementById('return-date'),
    };

    // Set minimum pickup date to today
    const today = new Date().toISOString().split('T')[0];
    fields.pickupDate.setAttribute('min', today);
    fields.returnDate.setAttribute('min', today);

    fields.pickupDate.addEventListener('change', () => {
        // Set min return date to be the same or after pickup date
        if (fields.pickupDate.value) {
            fields.returnDate.setAttribute('min', fields.pickupDate.value);
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            // In a real app, you'd send this data to a server
            console.log('Form is valid. Submitting...');
            
            // Hide form and show success message
            form.style.display = 'none';
            successMessage.style.display = 'block';
            bookingContainer.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log('Form is invalid.');
        }
    });

    function validateForm() {
        let isValid = true;
        // Reset all previous errors
        Object.values(fields).forEach(field => clearError(field));

        // --- Validation Rules ---

        // Full Name
        if (fields.fullName.value.trim() === '') {
            showError(fields.fullName, 'Full name is required.');
            isValid = false;
        }

        // Email
        if (fields.email.value.trim() === '') {
            showError(fields.email, 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(fields.email.value)) {
            showError(fields.email, 'Please enter a valid email address.');
            isValid = false;
        }

        // Phone
        if (fields.phone.value.trim() === '') {
            showError(fields.phone, 'Phone number is required.');
            isValid = false;
        }

        // Car Selection
        if (fields.car.value === '') {
            showError(fields.car, 'Please select a car.');
            isValid = false;
        }

        // Pickup Date
        if (fields.pickupDate.value === '') {
            showError(fields.pickupDate, 'Pickup date is required.');
            isValid = false;
        }

        // Return Date
        if (fields.returnDate.value === '') {
            showError(fields.returnDate, 'Return date is required.');
            isValid = false;
        }

        // Date Logic
        if (fields.pickupDate.value && fields.returnDate.value) {
            const pickup = new Date(fields.pickupDate.value);
            const ret = new Date(fields.returnDate.value);
            if (ret < pickup) {
                showError(fields.returnDate, 'Return date cannot be before pickup date.');
                isValid = false;
            }
        }

        return isValid;
    }

    function showError(field, message) {
        const formGroup = field.closest('.form-group');
        formGroup.classList.add('error');
        const errorDiv = formGroup.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.textContent = message;
        }
    }

    function clearError(field) {
        const formGroup = field.closest('.form-group');
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
});