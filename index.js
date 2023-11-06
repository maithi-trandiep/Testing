const calculPoints = (value1, value2, value3, value4, value5) => {
    let points = 0;
    let values = [value1, value2, value3, value4, value5];
    values.sort();
    for (let i = 0; i < values.length; i++) {
        // si trois valeurs randoms sont identiques et les deux autres aussi
        if (values[i] === values[i + 1] && values[i] === values[i + 2] && values[i + 3] === values[i + 4]) {
            points += 30;
            break;
        }
        
        // si quatre valeurs randoms sont identiques
        if (values[i] === values[i + 1] && values[i] === values[i + 2] && values[i] === values[i + 3]) {
            points += 35;
            break;
        }

        // si trois valeurs randoms sont identiques
        if (values[i] === values[i + 1] && values[i] === values[i + 2]) {
            points += 28;
            break;
        }
    }

    return points;
}

module.exports = calculPoints;