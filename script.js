const burguerMenu = document.querySelector('.burguer-menu');
const nav = document.querySelector('.nav-header');

burguerMenu.addEventListener('click', () => {
	nav.classList.toggle('nav-hidden');
});
