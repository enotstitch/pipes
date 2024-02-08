import { cityData } from './cityData.js';

const modalSearch = document.querySelector('.modal__search');

let cityDataSorted = cityData.sort((a, b) => {
	if (a.name.toLowerCase() < b.name.toLowerCase()) {
		return -1;
	}
	if (a.name.toLowerCase() > b.name.toLowerCase()) {
		return 1;
	}
	return 0;
});

modalSearch.addEventListener('input', function () {
	let listSearch = document.querySelectorAll('.city-list__item');
	let currentValue = this.value.trim().toLowerCase();

	if (currentValue) {
		listSearch.forEach((listItem) => {
			let listItemText = listItem.textContent.trim().toLowerCase();

			if (!listItemText.includes(currentValue)) {
				listItem.classList.add('city-list__item--hide');
			}

			if (listItemText.includes(currentValue)) {
				listItem.classList.remove('city-list__item--hide');
			}
		});
	} else {
		listSearch.forEach((listItem) => {
			listItem.classList.remove('city-list__item--hide');
		});
	}
});

const scrollSities = () => {
	const btnsNext = document.querySelectorAll('.city-list-btn--next');
	const btnsPrev = document.querySelectorAll('.city-list-btn--prev');

	btnsNext.forEach((btnNext) => {
		btnNext.addEventListener('click', () => {
			const citiesWrap = btnNext.closest('.cities-wrap');
			const listItem = citiesWrap.querySelector('.city-list__item');
			let cityList = listItem.closest('.city-list');

			let listItemWidth = listItem.offsetWidth;
			cityList.scrollLeft += listItemWidth * 4;
		});
	});

	btnsPrev.forEach((btnPrev) => {
		btnPrev.addEventListener('click', () => {
			const citiesWrap = btnPrev.closest('.cities-wrap');
			const listItem = citiesWrap.querySelector('.city-list__item');
			let cityList = listItem.closest('.city-list');

			let listItemWidth = listItem.offsetWidth;
			cityList.scrollLeft += -listItemWidth * 4;
		});
	});
};

const createCityItem = (cityListWrapClass, cityName, cityLink = '#') => {
	const cityListWrap = document.querySelector(cityListWrapClass);
	const cityList = cityListWrap.querySelector('.city-list');

	let cityItem = `
	<li class="city-list__item list-reset">
		<a class="city-list__link link-reset" href="${cityLink}">${cityName}</a>
	</li>
	`;

	cityList.innerHTML += cityItem;
};

const renderCity = () => {
	cityDataSorted.forEach((cityItem) => {
		try {
			createCityItem('.modal-slides', cityItem.name, cityItem.link);
		} catch {}
		try {
			createCityItem('.region-slides', cityItem.name, cityItem.link);
		} catch {}
	});
};

renderCity();
scrollSities();
