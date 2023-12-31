const calculPoints = (value1, value2, value3, value4, value5) => {
    let points = 0;
    let values = [value1, value2, value3, value4, value5];
    values.sort();
    for (let i = 0; i < values.length; i++) {
        // si les 5 valeurs sont identiques
        if (values[i] === values[i + 1] && values[i] === values[i + 2] && values[i] === values[i + 3] && values[i] === values[i + 4]) {
            points += 50;
            break;
        }

        // si les 5 valeurs se suivent
        if (values[i] === values[i + 1] - 1 && values[i] === values[i + 2] - 2 && values[i] === values[i + 3] - 3 && values[i] === values[i + 4] - 4) {
            points += 40;
            break;
        }
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

        // si pas de figure
        if (i === values.length - 1) {
            points += values[0] + values[1] + values[2] + values[3] + values[4];
        }
    }

    return points;
}


module.exports = calculPoints;