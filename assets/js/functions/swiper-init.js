import { Pagination, Navigation } from 'swiper/modules';

import Swiper from 'swiper';

const projectSwiper = new Swiper('.projects__slider', {
	modules: [Navigation],
	speed: 400,
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,

	navigation: {
		nextEl: '.projects__button--next',
		prevEl: '.projects__button--prev',
	},

	breakpoints: {
		1200: {
			slidesPerView: 3,
		},

		992: {
			slidesPerView: 2,
		},

		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	},

	effect: 'coverflow',
});

const teamSwiper = new Swiper('.team__slider', {
	modules: [Navigation],
	speed: 400,
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,

	navigation: {
		nextEl: '.team__button--prev',
		prevEl: '.team__button--next',
	},

	breakpoints: {
		1200: {
			slidesPerView: 3,
		},

		992: {
			slidesPerView: 2,
		},

		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	},

	effect: 'coverflow',
});
