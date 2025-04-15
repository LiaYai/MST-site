const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.burger-menu');
const headerNav = document.querySelector('.header-nav');
const overlay = document.querySelector('.overlay');
const scrollStart = 100; 

function handleScroll() {
  if (window.scrollY > scrollStart) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

function toggleMenu() {
  burgerMenu.classList.toggle('active');
  headerNav.classList.toggle('show');
}

function closeMenu() {
  headerNav.classList.remove('show');
  burgerMenu.classList.remove('active');
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    closeMenu();
  }
}

window.addEventListener('scroll', handleScroll);
burgerMenu.addEventListener('click', toggleMenu);
headerNav.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', handleKeyDown);
