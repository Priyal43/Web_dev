// JavaScript to handle subsection switching
function showSubsection(subsectionId) {
    // Hide all subsections
    const subsections = document.querySelectorAll('.work-subsection');
    subsections.forEach(subsection => subsection.style.display = 'none');

    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.work-btn');
    buttons.forEach(button => button.classList.remove('active'));

    // Show the selected subsection
    document.getElementById(subsectionId).style.display = 'flex';

    // Set the clicked button as active
    const activeButton = document.querySelector(`.work-btn[onclick="showSubsection('${subsectionId}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Initialize the default subsection
document.addEventListener('DOMContentLoaded', () => {
    showSubsection('internships');
});


// Get all the navigation links
const navLinks = document.querySelectorAll('#navbar ul li a');

// Add event listener on scroll
window.addEventListener('scroll', () => {
    let currentSection = '';

    // Loop through sections to get the one in the viewport
    document.querySelectorAll('section').forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove active class from all links
    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
