class Calc {
	constructor(selector) {
		this.elem = document.querySelector(selector);
		this.meterValue = 0;
		this.METER_COST = {};
		this.findElems();
		this.events();
	}

	findElems() {
		this.squareElem = this.elem.querySelector('.calc-square');
		this.squarePlus = this.squareElem.querySelector('[data-plus-btn]');
		this.squareMinus = this.squareElem.querySelector('[data-minus-btn]');
		this.squareValue = this.elem.querySelector('.calc-square__input');
		this.calculatePriceBtn = this.elem.querySelector('.calc-price__button');
		this.calculatePriceValue = this.elem.querySelector('[data-price-value]');
	}

	events() {
		this.squareValue.addEventListener('keydown', (e) => {
			console.log(e.key);
		});
	}
}

new Calc('.calc-form');
