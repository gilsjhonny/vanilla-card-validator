import * as cardValidator from './card-validator';

// input que será enmascarado y validado
// para la tarjeta de credito
const cardInput = document.querySelector(
    cardValidator.defaults.cardNumberSelector
);
// Hidden input que tendrá el valor sin enmascarar
const cardInputUnmasked = document.querySelector('#card_number_unmasked');

// Poner bin como placeholder
const bin = cardInput.dataset.bin;
cardValidator.setBinPlaceholder(cardInput, bin);

// Predecir tarjeta
cardValidator.predictCard(cardInput);

// Enmascarar
VMasker(cardInput).maskPattern(cardInput.getAttribute('mask-pattern'));

// Event Listener para no permitir que se elimine
// el bin
cardInput.addEventListener('input', e => {
    const element = e.target;

    if (element.dataset.bin) {
        if (element.value.length < element.dataset.bin.length) {
            setTimeout(() => (element.value = element.dataset.bin), 300);
        }
    }

    // Enmascarar
    VMasker(element).maskPattern(element.getAttribute('mask-pattern'));

    // Copiar el valor desenmascarado al hidden
    cardInputUnmasked.value = element.value.replace(/\s/g, '').trim();
});
