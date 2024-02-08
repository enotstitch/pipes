const checkPolicy = (sectionSelector, buttonSelector = '.button') => {
	const section = document.querySelector(sectionSelector);
	const form = section.querySelector('form');
	const policyCheckbox = form.querySelector('.checkbox__real');
	const policyFakeCheckbox = form.querySelector('.checkbox__fake');
	const sendButton = form.querySelector(buttonSelector);
	sendButton.setAttribute('disabled', '');

	policyCheckbox.addEventListener('click', () => {
		if (policyCheckbox.checked) {
			sendButton.removeAttribute('disabled');
			policyFakeCheckbox.classList.add('checkbox__fake--active');
		} else {
			sendButton.setAttribute('disabled', '');
			policyFakeCheckbox.classList.remove('checkbox__fake--active');
		}
	});
};

try {
	checkPolicy('#modalCall');
} catch {}
try {
	checkPolicy('.application');
} catch {}
try {
	checkPolicy('.calc', '.calc-data__button');
} catch {}
try {
	checkPolicy('.consultation');
} catch {}
