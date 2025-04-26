// scripts.js

// Smooth Scroll לכל הלחיצות בתפריט
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade In On Scroll לאזורים שנגללים
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Sticky Header (כשגוללים למטה)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Reveal Text Animation
const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
    revealElements.forEach(elem => {
        const windowHeight = window.innerHeight;
        const elementTop = elem.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            elem.classList.add('active');
        } else {
            elem.classList.remove('active');
        }
    });
});

// Progress Bar Scroll
window.addEventListener('scroll', function() {
    const scrollProgress = document.getElementById('scroll-progress');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Lightbox Gallery (לבחירות חיים)
const lightboxImages = document.querySelectorAll('.lightbox-image');

lightboxImages.forEach(image => {
    image.addEventListener('click', function() {
        const overlay = document.createElement('div');
        overlay.classList.add('lightbox-overlay');

        const img = document.createElement('img');
        img.src = this.src;
        img.classList.add('lightbox-popup');

        overlay.appendChild(img);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
    });
});