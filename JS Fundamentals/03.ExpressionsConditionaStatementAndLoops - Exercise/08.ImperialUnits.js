function calcInchesToImperialUnits(inches) {
    let foot = Math.floor(+inches / 12);
    let inchesInFt = +inches % 12;

    console.log(`${foot}'-${inchesInFt}"`);
}

calcInchesToImperialUnits(36);
calcInchesToImperialUnits(55);
calcInchesToImperialUnits(11);