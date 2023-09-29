const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.mobile-links');

// Function to open the mobile menu
function openMobileMenu() {
    mobileMenu.classList.remove('d-none');
}

// Function to close the mobile menu
function closeMobileMenu() {
    mobileMenu.classList.add('d-none');
}

hamburger.addEventListener('click', () => {
    if (mobileMenu.classList.contains('d-none')) {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
});

// Function to close the mobile menu when links are clicked
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        closeMobileMenu(); // Close the mobile menu when a link is clicked
    });
});