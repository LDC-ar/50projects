const progress = document.querySelector('.progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const numbers = document.querySelectorAll('.number');

let current = 1;

next.addEventListener('click', () => {
	current++;
	numbers[current - 1].classList.add('active');
	update();
});

prev.addEventListener('click', () => {
	current--;
	numbers[current].classList.remove('active');
	update();
});

function update() {
	if (current === 1) {
		prev.disabled = true;
	} else if (current === numbers.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
	progress.style.width = (100 / (numbers.length - 1)) * (current - 1) + '%';
}
