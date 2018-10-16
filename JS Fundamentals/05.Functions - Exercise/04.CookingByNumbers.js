function cooking(input) {
    let number = +input[0];

    let chop = () => number / 2;
    let dice = () => Math.sqrt(number);
    let spice = () => number + 1;
    let bake = () => number * 3;
    let fillet = () => number * 0.80;

    for (let i = 1; i < input.length; i++) {
        let currentCommand = input[i];

        if (currentCommand === 'chop') {
            number = chop();
        } else if (currentCommand === "dice") {
            number = dice();
        } else if (currentCommand === "spice") {
            number = spice();
        } else if (currentCommand === "bake") {
            number = bake();
        } else if (currentCommand === "fillet") {
            number = fillet();
        }

        console.log(number);
    }
}

cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);