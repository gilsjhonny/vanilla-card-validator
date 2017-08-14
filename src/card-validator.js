let defaults = {
    cardLogoSelector: '#card-logo',
    cardLabelSelector: '#card-label',
    cardNumberSelector: '#card_number',
    errorMessage: 'Tarjeta invalida'
};

const cards = {
    visa: {
        id: 1,
        name: 'Visa',
        regex: /^4(?:[0-9]{11}|[0-9]{14})[0-9]$/,
        predict: /^4[0-9]*$/,
        maxLength: 16,
        maskPattern: '9999 9999 9999 9999'
    },
    visadebito: {
        id: 31,
        name: 'Visa Debito',
        regex: /^4(?:[0-9]{11}|[0-9]{14})[0-9]$/,
        predict: /^4[0-9]*$/,
        maxLength: 16,
        maskPattern: '9999 9999 9999 9999'
    },
    mastercard: {
        id: 15,
        name: 'Mastercard',
        regex: /^5[1-5][0-9]{14}$/,
        predict: /^5[1-5][0-9]*$/,
        maxLength: 16,
        maskPattern: '9999 9999 9999 9999'
    },
    masterdebit: {
        id: 66,
        name: 'Master Debit',
        regex: /^5[1-5][0-9]{14}$/,
        predict: /^5[1-5][0-9]*$/,
        maxLength: 16,
        maskPattern: '9999 9999 9999 9999'
    },
    amex: {
        id: 6,
        name: 'American Express',
        regex: /^3[47][0-9]{13}$/,
        predict: /^3[47][0-9]*$/,
        maxLength: 15,
        maskPattern: '9999 999999 99999'
    },
    amexmt: {
        id: 65,
        name: 'American Express',
        regex: /^3[47][0-9]{13}$/,
        predict: /^3[47][0-9]*$/,
        maxLength: 15,
        maskPattern: '9999 999999 99999'
    },
    diners: {
        id: 8,
        name: 'Diners Club',
        regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        predict: /^3(?:0[0-5]|[68][0-9])[0-9]*/,
        maxLength: 14,
        maskPattern: '9999 9999 9999 9999'
    },
    discover: {
        id: 82,
        name: 'Discover',
        regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        predict: /^6(?:011|5[0-9]{2})[0-9]*/,
        maxLength: 16,
        maskPattern: '9999 9999 9999 9999'
    },
    shopping: {
        id: 23,
        name: 'Tarjeta Shopping',
        regex: /^279[0-9]{3,}$/,
        predict: /^279[0-9]{3}[0-9]*/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    shopping: {
        id: 23,
        name: 'Tarjeta Shopping',
        regex: /^606488[0-9]{0,}$/,
        predict: /^606488[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    naranja: {
        id: 24,
        name: 'Tarjeta Naranja',
        regex: /^589562[0-9]{0,}$/,
        predict: /^589562[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    qida: {
        id: 52,
        name: 'Tarjeta Qida',
        regex: /^504570[0-9]{0,}$/,
        predict: /^504570[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    clubdia: {
        id: 56,
        name: 'Club Dia',
        regex: /^636897[0-9]{0,}$/,
        predict: /^636897[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    musicred: {
        id: 57,
        name: 'Musicred',
        regex: /^636435[0-9]{0,}$/,
        predict: /^636435[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    nevada: {
        id: 39,
        name: 'Tarjeta Nevada',
        regex: /^504363[0-9]{0,}$/,
        predict: /^504363[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    tuya: {
        id: 59,
        name: 'Tarjeta Tuya',
        regex: /^588800[0-9]{0,}$/,
        predict: /^588800[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    laanonima: {
        id: 61,
        name: 'La Anonima',
        regex: /^421024[0-9]{0,}$/,
        predict: /^421024[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    crediguia: {
        id: 62,
        name: 'Credi Guia',
        regex: /^603288[0-9]{0,}$/,
        predict: /^603288[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    patagonia: {
        id: 55,
        name: 'Patagonia 365',
        regex: /^504656[0-9]{0,}$/,
        predict: /^504656[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    sol: {
        id: 64,
        name: 'Tarjeta Sol',
        regex: /^504639[0-9]{0,}$/,
        predict: /^504639[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    cabal: {
        id: 27,
        name: 'Cabal',
        regex: /^589657[0-9]{0,}$/,
        predict: /^589657[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    cencosud: {
        id: 43,
        name: 'Cencosud',
        regex: /^603493[0-9]{0,}$/,
        predict: /^603493[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    credimas: {
        id: 38,
        name: 'Credimas',
        regex: /^504520[0-9]{0,}$/,
        predict: /^504520[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    carrefour: {
        id: 44,
        name: 'Tarjeta Carrefour',
        regex: /^(507858|585274)[0-9]{0,}$/,
        predict: /^(507858|585274)[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    grupar: {
        id: 54,
        name: 'Tarjeta grupar',
        regex: /^(605915)[0-9]{0,}$/,
        predict: /^(605915)[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    },
    wishgift: {
        id: 102,
        name: 'Tarjeta wishgift',
        regex: /^(637046)[0-9]{0,}$/,
        predict: /^(637046)[0-9]{0,}/,
        maxLength: 15,
        maskPattern: '9999 9999 9999 9999'
    }
};

const rules = {
    CardHolderName: /^[\u00f1a-z\xD1A-Z ]+$/,
    CardHolderMail: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
    CardNumber: /^([0-9]{8,19})$/,
    CardExpirationDate: /^(0[1-9]|1[012])\d{2}$/,
    CardSecurityCode: /^([0-9]{3,4})$/,
    CardHolderIdentification: /^([0-9]{1,})$/,
    CardHolderIdentificationType: /^[1-9]$/,
    CardHolderAddressNumber: /^([0-9]{1,})$/,
    CardHolderDateOfBirth: /^(0[1-9]|[1-2][0-9]|31(?!(?:0[2469]|11))|30(?!02))(0[1-9]|1[0-2])([12]\d{3})$/,
    CardExpirationMonth: /^(0?[1-9]|1[012])$/,
    CardExpirationYear: /^([0-9]{2,4})$/,
    CardHolderBirthDay: /^(0?[1-9]|[12]\d|3[01])$/,
    CardHolderBirthMonth: /^(0?[1-9]|1[012])$/,
    CardHolderBirthYear: /^\d{4}$/,
    CardHolderAddressStreet: /.+/
};

// HTML Elements
const cardNumberInput = document.querySelector(defaults.cardNumberSelector);
const cardLogo = document.querySelector(defaults.cardLogoSelector);

// Event Listeners
if (cardNumberInput && cardLogo) {
    cardNumberInput.addEventListener('input', function(e) {
        predictCard(this);
        hasValidBin(this);

        validateCard(cardNumberInput)
            ? validCardClass(true)
            : validCardClass(false);
    });
}

////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////
const predictCard = element => {
    const cardNumber = trimAllSpaces(element.value);

    if (!cardNumber) {
        setCardLogo('unknown');
        return;
    }

    for (var card in cards) {
        if (cards.hasOwnProperty(card)) {
            if (cards[card].predict.test(cardNumber)) {
                element.setAttribute('mask-pattern', cards[card].maskPattern);
                const maxLength = cards[card].maskPattern.length;
                setMaxlength(element, maxLength);

                setCardLogo(card);
                break;
            } else {
                setCardLogo('unknown');
            }
        }
    }
};

const setCardLogo = (card = 'unknown') => {
    cardLogo.classList = '';

    card === 'unknown'
        ? cardLogo.classList.add('unkown')
        : cardLogo.classList.add(card);
};

const validateCard = element => {
    const cardNumber = element.value.replace(/\s/g, '').trim();

    if (!rules.CardNumber.test(cardNumber)) return false;

    if (!hasValidBin(element)) return false;

    for (var card in cards) {
        if (cards[card].regex.test(cardNumber)) {
            return validateLuhn(cardNumber) ? card : false;
        }
    }
};

const setMaxlength = (element, length) => {
    element.setAttribute('maxlength', length);
};

const setBinPlaceholder = (element, bin) => {
    element.value = bin;
};

const hasValidBin = element => {
    const bin = element.dataset.bin;

    if (!bin) return false;

    return bin;

    if (bin !== element.value.slice(0, bin.length)) {
        return false;
    }

    return true;
};

const validCardClass = bool => {
    var cardInput = document.querySelector(defaults.cardNumberSelector);

    if (cardInput) {
        if (bool) {
            cardInput.classList.remove('error');
            cardInput.classList.add('validcard');
            // console.log('Valida');
        } else {
            // console.log('No Valida');
            cardInput.classList.add('error');
            cardInput.classList.remove('validcard');
        }
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
        // console.log('Luhn invalido');
    }
}

function trimAllSpaces(str) {
    return str.replace(/\s/g, '').trim();
}

export { defaults, predictCard, validateCard, setMaxlength, setBinPlaceholder };
