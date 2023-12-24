const screenWidth = window.screen.width;

document.addEventListener('DOMContentLoaded', () => {
	const content = document.querySelector('.our-projects__cards');
	let itemsPerPage = 8;
	if (screenWidth <= 640) {
		itemsPerPage = 4;
	}

	let currentPage = 0;
	const items = Array.from(content.querySelectorAll('.our-projects__card'));

	const showPage = (page) => {
		const startIndex = page * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		items.forEach((item, index) => {
			item.classList.toggle('hidden', index < startIndex || index >= endIndex);
		});
		updateActiveButtonStates();
	};

	const createPageButtons = () => {
		const totalPages = Math.ceil(items.length / itemsPerPage);
		const paginationContainer = document.createElement('div');
		const paginationDiv = document.body.appendChild(paginationContainer);
		paginationContainer.classList.add('pagination');
		paginationContainer.classList.add('our-projects__pagination');

		for (let i = 0; i < totalPages; i++) {
			const pageButton = document.createElement('button');
			pageButton.classList.add('pagination__button');
			pageButton.classList.add('btn-reset');

			pageButton.textContent = i + 1;
			pageButton.addEventListener('click', () => {
				currentPage = i;
				showPage(currentPage);
				updateActiveButtonStates();
			});

			content.after(paginationContainer);
			paginationDiv.appendChild(pageButton);
		}
	};

	const updateActiveButtonStates = () => {
		const pageButtons = document.querySelectorAll('.our-projects__pagination button');
		pageButtons.forEach((button, index) => {
			if (index === currentPage) {
				button.classList.add('active');
			} else {
				button.classList.remove('active');
			}
		});
	};

	createPageButtons();
	showPage(currentPage);
});
