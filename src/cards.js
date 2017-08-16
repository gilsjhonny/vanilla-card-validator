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

export default cards;
