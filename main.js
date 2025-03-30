/**
 * XUMEIJEWELRY - Main JavaScript File
 * Author: Manus AI
 * Version: 1.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider
    initHeroSlider();
    
    // Categories Slider
    initCategoriesSlider();
    
    // Testimonials Slider
    initTestimonialsSlider();
    
    // Back to Top Button
    initBackToTop();
    
    // Mobile Menu Toggle
    initMobileMenu();
});

/**
 * Initialize Hero Slider
 */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;
    
    // Start automatic slideshow
    startSlideshow();
    
    // Previous slide button
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            clearInterval(slideInterval);
            currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
            updateSlider();
            startSlideshow();
        });
    }
    
    // Next slide button
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            clearInterval(slideInterval);
            currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
            updateSlider();
            startSlideshow();
        });
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            clearInterval(slideInterval);
            currentSlide = index;
            updateSlider();
            startSlideshow();
        });
    });
    
    // Update slider to show current slide
    function updateSlider() {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Start automatic slideshow
    function startSlideshow() {
        clearInterval(slideInterval);
        slideInterval = setInterval(function() {
            currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
            updateSlider();
        }, 5000);
    }
}

/**
 * Initialize Categories Slider
 */
function initCategoriesSlider() {
    const slider = document.querySelector('.categories-slider');
    const prevBtn = document.querySelector('.prev-category');
    const nextBtn = document.querySelector('.next-category');
    
    if (!slider || !prevBtn || !nextBtn) return;
    
    const slideWidth = 280; // Width of slide + margin
    
    prevBtn.addEventListener('click', function() {
        slider.scrollBy({
            left: -slideWidth * 2,
            behavior: 'smooth'
        });
    });
    
    nextBtn.addEventListener('click', function() {
        slider.scrollBy({
            left: slideWidth * 2,
            behavior: 'smooth'
        });
    });
}

/**
 * Initialize Testimonials Slider
 */
function initTestimonialsSlider() {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    let currentTestimonial = 0;
    let testimonialInterval;
    
    // Start automatic testimonial rotation
    startTestimonialRotation();
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            clearInterval(testimonialInterval);
            currentTestimonial = index;
            updateTestimonials();
            startTestimonialRotation();
        });
    });
    
    // Update testimonials to show current one
    function updateTestimonials() {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[currentTestimonial].classList.add('active');
        dots[currentTestimonial].classList.add('active');
    }
    
    // Start automatic testimonial rotation
    function startTestimonialRotation() {
        clearInterval(testimonialInterval);
        testimonialInterval = setInterval(function() {
            currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
            updateTestimonials();
        }, 6000);
    }
}

/**
 * Initialize Back to Top Button
 */
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (!backToTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    // Scroll to top when button is clicked
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Initialize Mobile Menu
 */
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (!mobileMenuToggle || !mainNav) return;
    
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        
        // Toggle menu icon
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.mobile-menu-toggle') && !e.target.closest('.main-nav')) {
            mobileMenuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}
