import { cityData } from './cityData.js';

const cityList = document.querySelector('.city-list');
const slideBtnPrev = document.querySelector('.modal-slides__btn--prev');
const slideBtnNext = document.querySelector('.modal-slides__btn--next');
const modalSearch = document.querySelector('.modal__search');

modalSearch.addEventListener('input', function () {
	let listSearch = document.querySelectorAll('.city-list__item');
	let currentValue = this.value.trim();

	if (currentValue) {
		listSearch.forEach((listItem) => {
			if (listItem.innerText.search(currentValue) == -1) {
				listItem.classList.add('city-list__item--hide');
			}
		});
	} else {
		listSearch.forEach((listItem) => {
			listItem.classList.remove('city-list__item--hide');
		});
	}
});

slideBtnNext.addEventListener('click', () => {
	const listItem = document.querySelector('.city-list__item');
	let listItemWidth = listItem.offsetWidth;

	cityList.scrollLeft += listItemWidth;
});

slideBtnPrev.addEventListener('click', () => {
	const listItem = document.querySelector('.city-list__item');
	let listItemWidth = listItem.offsetWidth;
	cityList.scrollLeft += -listItemWidth;
});

const createCityItem = (cityName, cityLink = '#') => {
	let cityItem = `
	<li class="city-list__item list-reset">
		<svg class="city-list__icon">
			<use href="img/icons/sprite.svg#arrow-right"></use>
		</svg>
		<a class="city-list__link link-reset" href="${cityLink}">${cityName}</a>
	</li>
	`;

	cityList.innerHTML += cityItem;
};

const renderCity = () => {
	cityList.innerHTML = '';
	console.log(cityList.clientWidth);

	cityData.forEach((cityItem) => {
		createCityItem(cityItem.name, cityItem.link);
	});
};

renderCity();

// ! Поиск в селектах
// const inputsSearch = document.querySelectorAll('.calendar-search__input');
// inputsSearch.forEach((inputSearch) => {
//   inputSearch.addEventListener('input', function () {
//     let listSearch = document.querySelectorAll('.select__item');
//     let currentValue = this.value.trim();

//     if (currentValue) {
//       console.log(currentValue);
//       listSearch.forEach((listItem) => {
//         if (listItem.innerText.search(currentValue) == -1) {
//           listItem.classList.add('select__item--hide');
//         }
//       });
//     } else {
//       listSearch.forEach((listItem) => {
//         listItem.classList.remove('select__item--hide');
//       });
//     }
//   });
// });
// ! Поиск
