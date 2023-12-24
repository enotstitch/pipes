class Calc {
	constructor(selector) {
		this.elem = document.querySelector(selector);
		this.meterValue = 0;
		this.meterCost = 120;
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
		this.calculatePriceBtn = this.elem.querySelector('.calc-price__button');
		this.calculatePriceValue = this.elem.querySelector('[data-price-value]');
	}

	events() {
		this.costButtons.forEach((button) => {
			button.addEventListener('click', (e) => {
				const target = e.target;
				const costValue = target.getAttribute('data-cost');
				this.meterCost = costValue;
				this.unitValue.textContent = this.meterCost;
				this.calculation();
			});
		});

		this.squareValue.addEventListener('input', (e) => {
			const targetValue = e.target.value;
			e.target.value = targetValue.replace(/\D/g, '');
			this.meterValue = +e.target.value;
			this.calculation();
		});

		this.calculatePriceBtn.addEventListener('click', () => {
			this.calculation();
		});

		this.squarePlus.addEventListener('click', () => {
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
		const totalPrice = this.meterCost * this.meterValue;
		this.calculatePriceValue.textContent = totalPrice;
	}
}

new Calc('.calc');
