const closeBtn = document.querySelector('.close');
const openBtn = document.querySelector('.open');

const navBar = document.querySelector('.nav-links2');

closeBtn.addEventListener('click', () => {
  openBtn.style.display = 'block';
  closeBtn.style.display = 'none';
  navBar.style.display = 'none';
});

openBtn.addEventListener('click', (e) => {
  openBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  navBar.style.display = 'flex';
});
