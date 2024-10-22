// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate projects on scroll
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.project').forEach((project, i) => {
    ScrollTrigger.create({
        trigger: project,
        start: 'top bottom-=100',
        onEnter: () => {
            gsap.to(project, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: i * 0.1
            });
        }
    });
});

// Parallax effect for hero section
gsap.to('.hero', {
    backgroundPosition: '50% 100%',
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});




// Form submission handling


// Assuming GSAP is included in your project
gsap.registerPlugin(ScrollTrigger);

// Animate elements when they come into view
gsap.utils.toArray('.contact-info, .contact-form').forEach(element => {
    gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
});

// Form submission animation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Animate button
    gsap.to('.submit-btn', {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });

    // Here you would typically handle the form submission
    // For this example, we'll just show a success message
    setTimeout(() => {
        alert('Message sent successfully!');
        this.reset();
    }, 500);
});

// Input field animations
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input.nextElementSibling, {
            y: -20,
            scale: 0.8,
            color: '#0039ff',
            duration: 0.3
        });
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            gsap.to(input.nextElementSibling, {
                y: 0,
                scale: 1,
                color: '#666',
                duration: 0.3
            });
        }
    });
});




