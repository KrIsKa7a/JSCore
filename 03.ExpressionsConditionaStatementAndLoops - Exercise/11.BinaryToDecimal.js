function binaryToDecimalNumber(binaryNumber) {
    let pow = 0;
    let decimalNumber = 0;

    for (let i = binaryNumber.length - 1; i >= 0; i--) {
        let currentDigit = +binaryNumber[i];

        decimalNumber += currentDigit * Math.pow(2, pow);
        pow++;
    }

    console.log(decimalNumber);
}

binaryToDecimalNumber('00001001');
binaryToDecimalNumber('11110000');