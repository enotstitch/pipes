// Меню бургер
const menuBurger = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');
if (menuBurger) {
	menuBurger.addEventListener('click', function (e) {
		document.body.classList.toggle('lock');
		menuBurger.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach((menuLink) => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top +
				pageYOffset -
				document.querySelector('header').offsetHeight -
				110;

			if (menuBurger.classList.contains('active')) {
				document.body.classList.remove('lock');
				menuBurger.classList.remove('active');
				menuBody.classList.remove('active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
		}
	}
}

// Доп. шапка при скролле
const fixedHeader = document.querySelector('#fixedHeader');
const screenWidth = window.screen.width;

document.addEventListener('scroll', () => {
	scrollHandler();
});

const scrollHandler = () => {
	const scrollValue = document.documentElement.scrollTop;

	if (scrollValue >= 430 && screenWidth > 576) {
		fixedHeader.classList.add('active');
	} else {
		fixedHeader.classList.remove('active');
	}
};
