const fixedName = document.querySelector('.fixedName');
const fnUsername = fixedName.classList[1];
fixedName.innerHTML = `<a href="https://github.com/${fnUsername}">
<i class="fab fa-github"></i><b class="autoWriteBreak 500">stacksagar</b>
</a>`;

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
	console.log(this.scrollY);
	if (this.scrollY >= 20) {
		header.classList.add('headerEffect');
	} else {
		header.classList.remove('headerEffect');
	}
});

const navBars = document.querySelector('.navBars');
const headerNav = document.querySelector('.header nav');
let is = false;
navBars.addEventListener('click', (e) => {
	is = !is;
	if (is) {
		headerNav.classList.add('navUnset');
		e.target.innerHTML = `<i class="fas fa-times"></i>`
	} else {
		headerNav.classList.remove('navUnset');
		e.target.innerHTML = `<i class="fas fa-bars"></i>`
	}
});
