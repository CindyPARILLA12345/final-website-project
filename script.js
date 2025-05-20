document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    
    // Toggle menu when hamburger icon is clicked
    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
    });
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        });
    });
    
    // Close menu when scrolling
    window.addEventListener('scroll', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});