function modify(input) {
    let numberAsString = input.toString();

    let findAverage = function (numberStr) {
        let sum = 0;

        for (let i = 0; i < numberStr.length; i++) {
            let currentDigit = +numberStr[i];

            sum += currentDigit;
        }

        let average = sum / numberStr.length;

        return average;
    };

    while (findAverage(numberAsString) <= 5) {
        numberAsString += "9";
    }

    console.log(numberAsString);
}

modify(101);
modify(5835);