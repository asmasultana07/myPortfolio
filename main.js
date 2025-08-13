// nav
// JavaScript for Mobile Menu Toggle

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full'); // hide menu
});
