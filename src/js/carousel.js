// Featured Services Carousel Script
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('featured-carousel');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const indicators = document.querySelectorAll('.indicator');
    const cards = document.querySelectorAll('.promo-card');

    let currentSlide = 0;
    const totalSlides = cards.length;

    function showSlide(index) {
        // Remove active class from all cards and indicators
        cards.forEach(card => card.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));

        // Add active class to current slide
        if (cards[index]) {
            cards[index].classList.add('active');
        }
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }

        // Update button states
        if (prevBtn) prevBtn.disabled = index === 0;
        if (nextBtn) nextBtn.disabled = index === totalSlides - 1;

        currentSlide = index;
    }

    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                showSlide(currentSlide - 1);
            }
        });
    }

    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentSlide < totalSlides - 1) {
                showSlide(currentSlide + 1);
            }
        });
    }

    // Indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Initialize
    showSlide(0);
});
