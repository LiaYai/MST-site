const header = document.querySelector('.header');
const scrollStart = 100; 

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollStart) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});