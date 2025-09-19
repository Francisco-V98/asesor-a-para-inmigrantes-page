// DOM Elements
const contactForm = document.getElementById('contactForm');
const downloadBtn = document.getElementById('downloadPDF');
const heroCtaBtn = document.getElementById('heroCtaBtn');

// Form Submission Handler
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        whatsapp: formData.get('whatsapp'),
        country: formData.get('country'),
        message: formData.get('message') || 'Sin mensaje adicional'
    };
    
    // Validate required fields
    if (!data.fullName || !data.email || !data.whatsapp || !data.country) {
        showNotification('Por favor, completa todos los campos obligatorios.', 'error');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Por favor, ingresa un email válido.', 'error');
        return;
    }
    
    // Validate WhatsApp format (basic)
    const whatsappRegex = /^\+\d{1,4}\s?\d{6,14}$/;
    if (!whatsappRegex.test(data.whatsapp.replace(/\s/g, ''))) {
        showNotification('Por favor, ingresa un número de WhatsApp válido con prefijo (ej: +34 XXX XXX XXX).', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Create WhatsApp message
        const whatsappMessage = createWhatsAppMessage(data);
        
        // Open WhatsApp with pre-filled message
        const whatsappUrl = `https://wa.me/34682518339?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showNotification('¡Formulario enviado! Te redirigimos a WhatsApp para continuar la conversación.', 'success');
        
    }, 2000);
});

// Create WhatsApp Message
function createWhatsAppMessage(data) {
    return `¡Hola! Me interesa el Curso CAP para obtener la Autorización de Estancia por Estudios.

📋 *Mis datos:*
• Nombre: ${data.fullName}
• Email: ${data.email}
• WhatsApp: ${data.whatsapp}
• País de residencia: ${data.country}

💬 *Mensaje adicional:*
${data.message}

Me gustaría recibir más información sobre los paquetes disponibles y agendar una evaluación inicial gratuita de 30 minutos.

¡Gracias!`;
}

// Hero CTA Button Handler
heroCtaBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Smooth scroll to contact form
    const contactSection = document.getElementById('contactForm');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

// Download PDF Handler
downloadBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Show notification about PDF download
    showNotification('El PDF se descargará próximamente. Por ahora, puedes contactarnos para recibir toda la información.', 'info');
    
    // Optional: You can implement actual PDF download here
    // For now, we'll redirect to WhatsApp
    setTimeout(() => {
        const message = "Hola, me gustaría descargar la presentación completa del Curso CAP en PDF. ¿Podrían enviármela?";
        const whatsappUrl = `https://wa.me/34682518339?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }, 2000);
});

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        max-width: 400px;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        animation: slideInRight 0.3s ease-out;
        font-family: 'Inter', sans-serif;
    `;
    
    // Set notification colors based on type
    const colors = {
        success: { bg: '#10b981', text: '#ffffff' },
        error: { bg: '#ef4444', text: '#ffffff' },
        info: { bg: '#3b82f6', text: '#ffffff' },
        warning: { bg: '#f59e0b', text: '#ffffff' }
    };
    
    notification.style.backgroundColor = colors[type].bg;
    notification.style.color = colors[type].text;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle'
    };
    return icons[type] || icons.info;
}

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation classes to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.advantage-card, .package-card, .detail-item, .testimonial-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Duplicate testimonials for infinite scroll effect
    const testimonialTrack = document.querySelector('.testimonial-track');
    if (testimonialTrack) {
        const testimonials = testimonialTrack.innerHTML;
        testimonialTrack.innerHTML = testimonials + testimonials; // Duplicate for seamless loop
    }
});

// Form Input Enhancements
document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp number formatting
    const whatsappInput = document.getElementById('whatsapp');
    
    whatsappInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        
        // Add + prefix if not present
        if (value && !e.target.value.startsWith('+')) {
            e.target.value = '+' + value;
        }
    });
    
    // Add placeholder behavior for better UX
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input has value on page load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        transition: background-color 0.2s ease;
    }
    
    .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    
    .form-group.focused label {
        color: #3b82f6;
        font-weight: 600;
    }
    
    .fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
    }
`;

document.head.appendChild(style);

// Contact Method Click Tracking (Optional Analytics)
document.addEventListener('DOMContentLoaded', function() {
    const contactMethods = document.querySelectorAll('.contact-method');
    
    contactMethods.forEach(method => {
        method.addEventListener('click', function() {
            const methodType = this.classList.contains('whatsapp') ? 'WhatsApp' :
                              this.classList.contains('email') ? 'Email' :
                              this.classList.contains('instagram') ? 'Instagram' :
                              this.classList.contains('tiktok') ? 'TikTok' : 'Other';
            
            // You can add analytics tracking here
            console.log(`Contact method clicked: ${methodType}`);
        });
    });
});

// Lazy Loading for Images (if you add images later)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Scroll to Top Button (Optional)
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #3b82f6;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
