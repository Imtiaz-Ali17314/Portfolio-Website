// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Header Blur & Shrink on Scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.padding = '0';
    header.style.background = 'rgba(10, 10, 10, 0.9)';
    header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
  } else {
    header.style.padding = '10px 0';
    header.style.background = 'rgba(10, 10, 10, 0.8)';
    header.style.boxShadow = 'none';
  }
});

// Typed.js Initialization (Hero Text)
const typed = new Typed('#typed', {
  strings: [
    'HTML/CSS Specialist.',
    'React Developer.',
    'Full Stack Engineer.',
    'Database Manager.',
    'UI/UX Enthusiast.'
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
  cursorChar: '|',
  autoInsertCss: true,
});

// Intersection Observer for Scroll Animations
// This targets all elements with the class 'hidden' and adds 'visible' when they enter the viewport
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15 // Triggers when 15% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // If it's a timeline item, also trigger the internal styles if needed,
      // but 'visible' handles the CSS transform/opacity.
      if(entry.target.classList.contains('timeline-item')) {
          entry.target.classList.add('show');
      }

      // Stop observing once animated in
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Grab all elements that need to be animated
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
