window.addEventListener('scroll', function() {
    const firstHeader = document.querySelector('.first-header');
    const secondHeader = document.querySelector('.second-header');

    // Get the height of the first header
    const firstHeaderHeight = firstHeader.offsetHeight;

    // Check if the user has scrolled past the first header
    if (window.pageYOffset > firstHeaderHeight) {
        // Add a class to the second header to fix its position
        secondHeader.classList.add('fixed-header');
    } 
    else {
        // Remove the class if the user scrolls back up
        secondHeader.classList.remove('fixed-header');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const menu = document.querySelector('.navigation-bar ul');

    navbar.addEventListener('click', function () {
        menu.classList.toggle('show'); // Toggle the class directly on the ul element
    });
});





// ------------------------------image maximizer----------------------------
document.querySelectorAll('.blog-image').forEach(function(image) {
    image.addEventListener('click', function() {
      if (!image.classList.contains('maximized')) {
        image.classList.add('maximized');
        image.style.width = '100%';
        image.style.height = '100%';
      } else {
        image.classList.remove('maximized');
        image.style.width = '100%';
        // image.style.height = 'auto';
      }
    });
  });