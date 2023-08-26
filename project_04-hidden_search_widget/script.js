const searchBox = document.querySelector('.search-box');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
	searchBox.classList.toggle('active');
	input.focus();
});
