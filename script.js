const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.burger-menu');
const headerNav = document.querySelector('.header-nav');
const overlay = document.querySelector('.overlay');
const scrollStart = 100; 

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollStart) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  headerNav.classList.toggle('show');
});

headerNav.addEventListener('click', () => {
  headerNav.classList.remove('show');
  burgerMenu.classList.remove('active');
});

overlay.addEventListener('click', () => {
  headerNav.classList.remove('show');
  burgerMenu.classList.remove('active');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    headerNav.classList.remove('show');
    burgerMenu.classList.remove('active');
  }
});