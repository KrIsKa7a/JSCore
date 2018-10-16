function locateTreasure(input) {
    let findWhereTheTreasureLays = function (x, y) {
        let isOnTonga = (x >= 0 && x <= 2) && (y >= 6 && y <= 8);
        let isOnTuvalu = (x >= 1 && x <= 3) && (y >= 1 && y <= 3);
        let isOnSamoa = (x >= 5 && x <= 7) && (y >= 3 && y <= 6);
        let isOnCook = (x >= 4 && x <= 9) && (y >= 7 && y <= 8);
        let isOnTokelau = (x >= 8 && x <= 9) && (y >= 0 && y <= 1);

        if (isOnTonga) {
            return "Tonga";
        } else if (isOnTuvalu) {
            return "Tuvalu";
        } else if (isOnSamoa) {
            return "Samoa";
        } else if (isOnCook) {
            return "Cook";
        } else if (isOnTokelau) {
            return "Tokelau";
        } else {
            return "On the bottom of the ocean";
        }
    }

    for (let i = 0; i < input.length; i += 2) {
        let x = +input[i];
        let y = +input[i + 1];

        console.log(findWhereTheTreasureLays(x, y));
    }
}

locateTreasure([4, 2, 1.5, 6.5, 1, 3]);
locateTreasure([6, 4]);