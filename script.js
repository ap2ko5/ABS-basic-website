// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Update active navigation
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Floating animations for background elements
    animateFloatingElements();
    
    // Parallax effect for hero background elements
    window.addEventListener('scroll', handleParallaxScroll);
    
    // Button interactions
    setupButtonInteractions();
    
    // Mobile menu toggle (if needed for responsive)
    setupMobileMenu();
});

// Book Now button functionality
function bookNow() {
    // Show booking modal or redirect to booking page
    showBookingModal();
}

function showBookingModal() {
    // Create and show booking modal
    const modal = document.createElement('div');
    modal.className = 'booking-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Book Your Dream Car</h2>
                    <button class="modal-close" onclick="closeBookingModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="booking-info">
                        <div class="car-info">
                            <img src="images/nissan-sunny-white.png" alt="Nissan Sunny 2022" class="modal-car-img">
                            <div class="car-details">
                                <h3>Nissan Sunny 2022</h3>
                                <p class="price">1699/- Per Month</p>
                            </div>
                        </div>
                        <div class="contact-options">
                            <h3>Contact us to book:</h3>
                            <div class="contact-buttons">
                                <a href="tel:+971558240119" class="contact-btn phone-btn">
                                    <i class="fas fa-phone"></i>
                                    +971 558240119
                                </a>
                                <a href="tel:+971558527437" class="contact-btn phone-btn">
                                    <i class="fas fa-phone"></i>
                                    +971 558527437
                                </a>
                                <a href="tel:+971504868469" class="contact-btn phone-btn">
                                    <i class="fas fa-phone"></i>
                                    +971 504868469
                                </a>
                                <a href="https://wa.me/971558240119" class="contact-btn whatsapp-btn" target="_blank">
                                    <i class="fab fa-whatsapp"></i>
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add CSS styles for modal
    addModalStyles();
    
    // Animate modal in
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeBookingModal() {
    const modal = document.querySelector('.booking-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }
}

function addModalStyles() {
    if (document.getElementById('modal-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'modal-styles';
    styles.textContent = `
        .booking-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .booking-modal.show {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-overlay {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .modal-content {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            border-radius: 20px;
            max-width: 500px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        }
        
        .booking-modal.show .modal-content {
            transform: scale(1);
        }
        
        .modal-header {
            padding: 30px 30px 20px;
            border-bottom: 1px solid #333;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h2 {
            color: #FF6B35;
            font-size: 1.5rem;
            margin: 0;
        }
        
        .modal-close {
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.3s ease;
        }
        
        .modal-close:hover {
            background: rgba(255, 107, 53, 0.2);
        }
        
        .modal-body {
            padding: 30px;
        }
        
        .car-info {
            display: flex;
            gap: 20px;
            align-items: center;
            margin-bottom: 30px;
            padding: 20px;
            background: rgba(255, 107, 53, 0.1);
            border-radius: 15px;
        }
        
        .modal-car-img {
            width: 100px;
            height: auto;
        }
        
        .car-details h3 {
            color: white;
            font-size: 1.3rem;
            margin-bottom: 5px;
        }
        
        .car-details .price {
            color: #FFD700;
            font-size: 1.1rem;
            font-weight: bold;
        }
        
        .contact-options h3 {
            color: white;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .contact-buttons {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .contact-btn {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px 20px;
            text-decoration: none;
            color: white;
            border-radius: 10px;
            font-weight: 500;
            transition: all 0.3s ease;
            text-align: center;
            justify-content: center;
        }
        
        .phone-btn {
            background: linear-gradient(45deg, #FF6B35, #FFD700);
        }
        
        .whatsapp-btn {
            background: #25D366;
        }
        
        .contact-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 107, 53, 0.4);
        }
        
        .whatsapp-btn:hover {
            box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
        }
        
        @media (max-width: 480px) {
            .modal-overlay {
                padding: 10px;
            }
            
            .modal-header,
            .modal-body {
                padding: 20px;
            }
            
            .car-info {
                flex-direction: column;
                text-align: center;
            }
        }
    `;
    
    document.head.appendChild(styles);
}

function animateFloatingElements() {
    const floatingElements = document.querySelectorAll('.bg-circle-1, .bg-circle-2, .circle');
    
    floatingElements.forEach((element, index) => {
        const duration = 3000 + (index * 500); // Varying durations
        const delay = index * 200; // Staggered start times
        
        element.style.animation = `float ${duration}ms ease-in-out ${delay}ms infinite`;
    });
    
    // Add CSS keyframes if not already added
    if (!document.getElementById('float-animation')) {
        const style = document.createElement('style');
        style.id = 'float-animation';
        style.textContent = `
            @keyframes float {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-10px);
                }
            }
            
            @keyframes floatLarge {
                0%, 100% {
                    transform: translateY(0px) rotate(0deg);
                }
                50% {
                    transform: translateY(-15px) rotate(5deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function handleParallaxScroll() {
    const scrolled = window.pageYOffset;
    const bgElements = document.querySelectorAll('.hero-bg-elements > *');
    
    bgElements.forEach((element, index) => {
        const rate = scrolled * (-0.1 - index * 0.05);
        element.style.transform = `translateY(${rate}px)`;
    });
}

function setupButtonInteractions() {
    const buttons = document.querySelectorAll('.cta-button, .promo-cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', bookNow);
        
        // Add ripple effect
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.className = 'ripple';
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple effect CSS
    if (!document.getElementById('ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            .cta-button, .promo-cta-button {
                position: relative;
                overflow: hidden;
            }
            
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function setupMobileMenu() {
    // Add mobile menu toggle if needed
    const nav = document.querySelector('.navigation');
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    navToggle.style.display = 'none';
    
    // Insert before navigation
    nav.parentNode.insertBefore(navToggle, nav);
    
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('nav-open');
        const icon = this.querySelector('i');
        icon.className = nav.classList.contains('nav-open') ? 'fas fa-times' : 'fas fa-bars';
    });
    
    // Add mobile menu styles
    if (!document.getElementById('mobile-nav-styles')) {
        const style = document.createElement('style');
        style.id = 'mobile-nav-styles';
        style.textContent = `
            @media (max-width: 768px) {
                .nav-toggle {
                    display: block !important;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 10px;
                }
                
                .navigation {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
                    transform: translateY(-100%);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                    border-radius: 0 0 20px 20px;
                }
                
                .navigation.nav-open {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }
                
                .nav-menu {
                    flex-direction: column;
                    padding: 20px;
                    gap: 10px;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Intersection Observer for scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.featured-content, .promo-content');
    animateElements.forEach(el => observer.observe(el));
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', setupScrollAnimations);

// Contact item hover effects
document.addEventListener('DOMContentLoaded', function() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.background = 'rgba(255, 215, 0, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.background = 'rgba(0, 0, 0, 0.2)';
        });
    });
});

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'images/nissan-sunny-white.png',
        'images/audi-red-car.png',
        'images/abs-logo.png'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
document.addEventListener('DOMContentLoaded', preloadImages);