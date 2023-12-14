import { cityData } from './cityData.js';

const modalSlide = document.querySelector('.modal-slides__item');
const cityItems = cityData.length;
let cityListNum = Math.ceil(cityItems / 28);

const createCityItem = (cityName, cityLink = '#') => {
	let cityItem = `
	<li class="city-list__item list-reset">
		<svg class="city-list__icon">
			<use href="img/icons/sprite.svg#arrow-right"></use>
		</svg>
		<a class="city-list__link link-reset" href="${cityLink}">${cityName}</a>
	</li>
	`;

	return cityItem;
};

const createCityList = () => {
	let i = 1;
	let cityItemsArr = [];

	cityData.forEach((cityItem, cityIndex) => {
		console.log(cityIndex);
		cityItemsArr.push({
			name: cityItem.name,
			link: cityItem.link,
		});
	});
	console.log(cityItemsArr);

	do {
		let cityList = `
		<ul class="city-list list-reset" data-page="${i}"></ul>
		`;

		modalSlide.innerHTML += cityList;

		++i;
	} while (i <= cityListNum);
};

createCityList();

// const renderCity = () => {
// 	cityList.innerHTML = '';

// 	cityData.forEach((cityItem) => {
// 		let indexOfCity = cityData.indexOf(cityItem);

// 		createCityItem(cityItem.name, cityItem.link);
// 	});
// };

// renderCity();
