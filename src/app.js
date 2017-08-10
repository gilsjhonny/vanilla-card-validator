import * as cardValidator from './card-validator';

const cardInput = document.querySelector('#card-number');

// Initial stuff
const bin = cardInput.dataset.bin;
cardValidator.setBinPlaceholder(cardInput, bin);

cardValidator.predictCard(cardInput);
VMasker(cardInput).maskPattern(cardInput.getAttribute('mask-pattern'));

cardInput.addEventListener('input', e => {
    const element = e.target;

    if (element.dataset.bin) {
        if (element.value.length < element.dataset.bin.length) {
            setTimeout(() => (element.value = element.dataset.bin), 300);
        }
    }

    VMasker(element).maskPattern(element.getAttribute('mask-pattern'));
});
