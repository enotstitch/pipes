let inputsPhone = document.querySelectorAll('input[type="tel"]:not(.no-mask)');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputsPhone);
