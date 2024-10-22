document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.querySelector('.projects-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const cardWidth = projectCards[0].offsetWidth + 32; // 32px for the gap
    let currentIndex = 0;

    function updateButtonStates() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= projectCards.length - 2;
    }

    function scrollProjects(direction) {
        if (direction === 'next' && currentIndex < projectCards.length - 2) {
            currentIndex++;
        } else if (direction === 'prev' && currentIndex > 0) {
            currentIndex--;
        }
        projectsContainer.scrollTo({
            left: cardWidth * currentIndex,
            behavior: 'smooth'
        });
        updateButtonStates();
    }

    prevBtn.addEventListener('click', () => scrollProjects('prev'));
    nextBtn.addEventListener('click', () => scrollProjects('next'));

    updateButtonStates();

    const viewDetailsButtons = document.querySelectorAll('.btn-view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const link = this.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const blogsContainer = document.querySelector('.blogs-container');
    const prevBlogBtn = document.querySelector('.prev-blog');
    const nextBlogBtn = document.querySelector('.next-blog');
    const blogCards = document.querySelectorAll('.blog-card');
    const cardWidth = blogCards[0].offsetWidth + 32; // 32px for the gap
    let currentBlogIndex = 0;

    function updateBlogButtonStates() {
        prevBlogBtn.disabled = currentBlogIndex === 0;
        nextBlogBtn.disabled = currentBlogIndex >= blogCards.length - 1;
    }

    function scrollBlogs(direction) {
        if (direction === 'next' && currentBlogIndex < blogCards.length - 1) {
            currentBlogIndex++;
        } else if (direction === 'prev' && currentBlogIndex > 0) {
            currentBlogIndex--;
        }
        blogsContainer.scrollTo({
            left: cardWidth * currentBlogIndex,
            behavior: 'smooth'
        });
        updateBlogButtonStates();
    }

    prevBlogBtn.addEventListener('click', () => scrollBlogs('prev'));
    nextBlogBtn.addEventListener('click', () => scrollBlogs('next'));

    updateBlogButtonStates();

    // Make the entire blog card clickable
    blogCards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.querySelector('.read-more').getAttribute('href');
            if (link) {
                window.location.href = link;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Thank you for your message. I will get back to you soon!');
                form.reset();
            } else {
                alert('Oops! There was a problem sending your message. Please try again.');
            }
        }).catch(error => {
            alert('Oops! There was a problem sending your message. Please try again.');
        });
    });
});


// Get the portfolio button element
const portfolioBtn = document.querySelector('.portfolio-btn');

// Add an event listener to the button
portfolioBtn.addEventListener('click', () => {
  // Redirect to the portfolio page
  window.location.href = 'Newsheet.html';
});

// Get the contact button element
const contactBtn = document.querySelector('.contact-btn');

// Add an event listener to the button
contactBtn.addEventListener('click', () => {
  // Get the contact section element
  const contactSection = document.getElementById('contact');

  // Scroll to the contact section
  contactSection.scrollIntoView({ behavior: 'smooth' });
});



    document.querySelector('.contact-btn').addEventListener('click', function() {
        document.getElementById('contact-footer').scrollIntoView({ behavior: 'smooth' });
    });



    document.addEventListener('DOMContentLoaded', function() {
        const progressBars = document.querySelectorAll('.circular-progress');
        progressBars.forEach(bar => {
          const progress = bar.getAttribute('data-progress');
          bar.style.setProperty('--value', progress);
        });
      });


      document.addEventListener('DOMContentLoaded', function() {
  const articleGrid = document.querySelector('.articles-grid');
  const scrollLeftBtn = document.querySelector('.scroll-left');
  const scrollRightBtn = document.querySelector('.scroll-right');
  const articleWidth = document.querySelector('.article-card').offsetWidth + 32; // 32 is the gap

  let currentScroll = 0;

  scrollLeftBtn.addEventListener('click', () => {
    currentScroll -= articleWidth * 3;
    if (currentScroll < 0) currentScroll = 0;
    articleGrid.style.transform = `translateX(-${currentScroll}px)`;
  });

  scrollRightBtn.addEventListener('click', () => {
    currentScroll += articleWidth * 3;
    const maxScroll = articleWidth * 3; // Only allow scrolling to show the last 3 articles
    if (currentScroll > maxScroll) currentScroll = maxScroll;
    articleGrid.style.transform = `translateX(-${currentScroll}px)`;
  });
});






// Select the hire-btn element
const hireBtn = document.querySelector('.hire-btn');

// Add a click event listener to the hire-btn element
hireBtn.addEventListener('click', () => {
  // Scroll to the contact-footer section
  const contactFooter = document.querySelector('#contact-footer');
  contactFooter.scrollIntoView({ behavior: 'smooth' });
});



/////// background Animation


function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + "%";
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const percentElements = document.querySelectorAll('.skill-percent');
    const fillElements = document.querySelectorAll('.skill-fill');

    percentElements.forEach((el, index) => {
        const targetWidth = fillElements[index].style.width;
        const targetPercent = parseInt(targetWidth);
        animateValue(el, 0, targetPercent, 1500);
        setTimeout(() => {
            fillElements[index].style.width = targetWidth;
        }, 100);
    });

    
  
    }
);



document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navUl = document.querySelector('nav ul');
  
    mobileMenuBtn.addEventListener('click', function() {
      navUl.classList.toggle('show');
    });
  });


  // Get the Say Hello button
const sayHelloButton = document.querySelector('.hire-btn');

// Add an event listener to the button
sayHelloButton.addEventListener('click', () => {
  // Get the contact section
  const contactSection = document.getElementById('contact');

  // Scroll to the contact section
  contactSection.scrollIntoView({ behavior: 'smooth' });
});






  // Scroll to the contact section


  