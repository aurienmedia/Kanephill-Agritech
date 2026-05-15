// Banner Slider - Simple Right to Left
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.banner-slider');
    if (!slider) return;
    
    const slides = slider.querySelector('.slides');
    const dots = slider.querySelectorAll('.dot');
    let currentSlide = 0;
    const totalSlides = dots.length;
    let autoSlideInterval;
    
    // Function to go to specific slide
    function goToSlide(index) {
        currentSlide = index;
        slides.style.transform = 'translateX(-' + (currentSlide * 33.333) + '%)';
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }
    
    // Function for next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }
    
    // Function for previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
    }
    
    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoSlide();
        });
    });

// Developed for
// Paresh Mali, Founder & MD — Kanephil Agritech

// Website Developed By
// Ankit Kushwaha — Freelance Developer

// Project Executed By
// Aurien Media
// Rohit Shah — Founder & CEO

// © All Rights Reserved by Aurien Media & Kanephil Agritech Pvt. Ltd.
    
    // Auto slide function
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Start auto slide
    startAutoSlide();
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
});

