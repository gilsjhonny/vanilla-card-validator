const trimAllSpaces = str => str.replace(/\s/g, '').trim();

const mask = (str, pattern) => {
    let arrPattern = [...pattern];
    let noSpaces = [...str.replace(/\s/g, '')];
    let masked = [];

    arrPattern.forEach((value, i) => {
        if (noSpaces.length === 0) return;

        if (value !== ' ') {
            masked.push(noSpaces.shift());
        }

        if (value === ' ') {
            masked.push(' ');
        }
    });

    return masked.join('');
};

export { trimAllSpaces, mask };
