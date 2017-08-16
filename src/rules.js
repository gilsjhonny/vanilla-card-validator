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

export default rules;
