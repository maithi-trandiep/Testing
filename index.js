const calculPoints = (value1, value2, value3, value4, value5) => {
    let somme = 0;
    let values = [value1, value2, value3, value4, value5];
    values.sort();
    for (let i = 0; i < values.length; i++) {
        // si trois valeurs randoms sont identiques
        if (values[i] === values[i + 1] && values[i] === values[i + 2]) {
            somme += 28;
        }
    }

    return somme;
}

module.exports = calculPoints;