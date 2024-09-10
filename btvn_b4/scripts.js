const hamburgerBtn = document.getElementById('hamburger-btn');
const menu2 = document.querySelector('.menu2');

hamburgerBtn.addEventListener('click', () => {
  menu2.classList.toggle('show');
});