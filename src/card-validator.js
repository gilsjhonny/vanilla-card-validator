import cards from './cards';
import rules from './rules';
import { trimAllSpaces, mask, setMaxlength } from './helpers';

let defaults = {
    querySelectors: {
        logo: '#card-logo',
        label: '#card-label',
        cardNumber: '#card_number'
    },
    errorMessage: 'Tarjeta invalida'
};

const init = () => {
    const cardLogo = document.querySelector(defaults.querySelectors.logo);
    const cardNumberInput = document.querySelector(
        defaults.querySelectors.cardNumber
    );

    // Add Event Listeners
    if (cardNumberInput && cardLogo) {
        cardNumberInput.addEventListener('input', function() {
            // Clear any error class if there's any
            this.classList.remove('error');

            // Check for mask-pattern
            const maskPattern = this.getAttribute('mask-pattern');
            if (maskPattern) this.value = mask(this.value, maskPattern);

            const card = predictCard(this);

            card
                ? setCardLogo(cardLogo, card)
                : setCardLogo(cardLogo, 'unknown');

            if (this.value.length === 0) debugger;

            console.log(`Value: ${this.value.length}`);
            validateCard(cardNumberInput) && this.value.length > 0
                ? validCardClass(cardNumberInput, true)
                : validCardClass(cardNumberInput, false);
        });
    }
};

const predictCard = element => {
    let predictedCard = '';
    const cardNumber = trimAllSpaces(element.value);

    // It's a possible card number?
    if (!cardNumber) return false;

    for (var card in cards) {
        if (cards.hasOwnProperty(card)) {
            if (cards[card].predict.test(cardNumber)) {
                element.setAttribute('mask-pattern', cards[card].maskPattern);

                // Take into consideration the length including mask pattern
                const maxLength = cards[card].maskPattern.length;
                setMaxlength(element, maxLength);

                predictedCard = card;
                break;
            }
        }
    }

    return predictedCard;
};

const setCardLogo = (element, card = 'unknown') => {
    element.classList = '';

    card === 'unknown'
        ? element.classList.add('unkown')
        : element.classList.add(card);
};

const validateCard = element => {
    const cardNumber = trimAllSpaces(element.value);

    // If is not a possible card number, then return false
    if (!rules.CardNumber.test(cardNumber)) return false;

    for (var card in cards) {
        if (cards[card].regex.test(cardNumber)) {
            return validateLuhn(cardNumber) ? card : false;
        }
    }
};

const validCardClass = (element, bool) => {
    if (!element) return;

    if (bool) {
        element.classList.remove('error');
        element.classList.add('validcard');
    } else {
        element.classList.add('error');
        element.classList.remove('validcard');
    }
};

function validateLuhn(number) {
    var digits = number.split('').reverse();
    var oddDigits = [];
    var evenDigits = [];

    digits.forEach(function(digit, index) {
        if ((index + 1) % 2 !== 0) {
            oddDigits.push(digit);
        } else {
            evenDigits.push(digit);
        }
    });

    var s1 = oddDigits.reduce(function(sum, value) {
        return parseInt(sum) + parseInt(value);
    });

    var s2 = evenDigits
        .map(function(digit) {
            var multiplication = digit * 2;

            if (multiplication > 9) {
                var separatedDigits = multiplication.toString().split('');

                return (
                    parseInt(separatedDigits[0]) + parseInt(separatedDigits[1])
                );
            }

            return multiplication;
        })
        .reduce(function(sum, value) {
            return parseInt(sum) + parseInt(value);
        });

    var result = (s1 + s2).toString();

    if (result.charAt(result.length - 1) === '0') {
        return true;
    } else {
        // console.log('No Valida');
    }
}

export { init, defaults, predictCard, validateCard };
