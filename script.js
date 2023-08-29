'use strict';

(function() {
  window.addEventListener('load', init);

  function init() {
    addSmoothScrolling();
    addClassProjectToggle();
  }

  function addSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  function addClassProjectToggle() {
    const classProjectHeaders = document.querySelectorAll('.project-box h3');

    classProjectHeaders.forEach(header => {
      header.addEventListener('click', function() {
        header.nextElementSibling.classList.toggle('hidden');
      });
    });
  }

})();
