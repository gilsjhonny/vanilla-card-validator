import * as cardValidator from './card-validator';

cardValidator.defaults.querySelectors.cardNumber = '#card';
cardValidator.defaults.querySelectors.logo = '#logo';
cardValidator.init();
