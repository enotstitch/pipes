class Calc {
	constructor(selector) {
		this.elem = document.querySelector(selector);
		this.meterValue = 0;
		this.meterCost = 120;
		this.maxValue = 400;
		this.totalPrice = 0;
		this.findElems();
		this.events();
	}

	findElems() {
		this.costButtons = this.elem.querySelectorAll('.calc__button');
		this.squareElem = this.elem.querySelector('.calc-square');
		this.squarePlus = this.squareElem.querySelector('[data-plus-btn]');
		this.squareMinus = this.squareElem.querySelector('[data-minus-btn]');
		this.unitValue = this.elem.querySelector('.calc-unit__value');
		this.squareValue = this.elem.querySelector('.calc-square__input');
		this.calculatePriceValue = this.elem.querySelector('[data-price-value]');

		this.hiddenService = this.elem.querySelector('#calc-service');
		this.hiddenCost = this.elem.querySelector('#calc-cost');
		this.hiddenMeter = this.elem.querySelector('#calc-meter');

		console.log(this.hiddenService);
	}

	events() {
		this.costButtons.forEach((button) => {
			button.addEventListener('click', (e) => {
				const target = e.target;
				const costValue = target.getAttribute('data-cost');
				this.meterCost = costValue;
				this.unitValue.textContent = this.meterCost;
				this.calculation();
				this.hiddenService.value = target.textContent.trim();
			});
		});

		this.squareValue.addEventListener('click', (e) => {
			if (e.target.value == 0) {
				e.target.value = '';
			}
		});

		this.squareValue.addEventListener('input', (e) => {
			const isFirstSymb =
				(+e.target.value > 0 && e.data == '0' && e.target.value[0] == 0) ||
				(e.target.value[1] == 0 && +e.target.value == 0);

			if (e.target.value > this.maxValue || isFirstSymb) {
				e.target.value = this.meterValue;
			}

			const targetValue = e.target.value;
			e.target.value = targetValue.replace(/\D/g, '');
			this.meterValue = +e.target.value;
			this.calculation();
		});

		this.squareValue.addEventListener('blur', (e) => {
			const targetValue = e.target.value;
			if (!targetValue) {
				e.target.value = 0;
			}
		});

		this.squarePlus.addEventListener('click', () => {
			if (this.squareValue.value >= this.maxValue) {
				return;
			}

			this.squareValue.value = ++this.meterValue;
			this.calculation();
		});

		this.squareMinus.addEventListener('click', () => {
			if (this.squareValue.value == 0) {
				return;
			}

			this.squareValue.value = --this.meterValue;
			this.calculation();
		});
	}

	calculation() {
		this.totalPrice = this.meterCost * this.meterValue;
		this.formatting();
		this.calculatePriceValue.textContent = this.totalPrice;
		this.hiddenCost.value = this.totalPrice;
		this.hiddenMeter.value = this.meterValue;
	}

	formatting() {
		this.totalPrice = this.totalPrice.toString();
		const priceLength = this.totalPrice.length;

		if (priceLength > 3) {
			const warp = this.totalPrice.substr(0, priceLength - 3);
			const rem = this.totalPrice.substr(priceLength - 3, priceLength);
			this.totalPrice = `${warp} ${rem}`;
		}
	}
}

try {
	new Calc('.calc');
} catch {}
