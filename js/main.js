// nav
// JavaScript for Mobile Menu Toggle

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full'); // hide menu
});

// about
// tab details visible

// const tabs = document.querySelectorAll(".tab-btn");
// const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", (e) => {
    e.preventDefault(); 
    
    tabs.forEach(btn => btn.classList.remove("border-b-2", "border-blue-300"));
    contents.forEach(content => content.classList.add("hidden"));

    // Active tab highlight 
    tab.classList.add("border-b-2", "border-blue-300");
    document.getElementById(tab.dataset.tab).classList.remove("hidden");
  });
});