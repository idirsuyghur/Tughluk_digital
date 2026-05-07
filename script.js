// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md', 'py-2');
        navbar.classList.remove('py-4');
        backToTop.style.display = 'flex';
    } else {
        navbar.classList.remove('shadow-md', 'py-2');
        navbar.classList.add('py-4');
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');

const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
};

mobileMenuButton.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
            toggleMenu();
        }
    });
});

// Custom Cursor
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

// Enable custom cursor only on devices with a mouse
if (window.matchMedia("(pointer: fine)").matches) {
    document.body.classList.add('cursor-none');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 150, fill: "forwards" });
    });

    // Hover effect for cursor
    const interactables = document.querySelectorAll('a, button, input, textarea');
    interactables.forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'scale(1.5)';
            cursorOutline.style.backgroundColor = 'rgba(37, 99, 235, 0.1)';
            cursorDot.style.transform = 'scale(0.5)';
        });
        item.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'scale(1)';
            cursorOutline.style.backgroundColor = 'transparent';
            cursorDot.style.transform = 'scale(1)';
        });
    });
} else {
    // Hide custom cursor elements on touch devices
    cursorDot.style.display = 'none';
    cursorOutline.style.display = 'none';
}
