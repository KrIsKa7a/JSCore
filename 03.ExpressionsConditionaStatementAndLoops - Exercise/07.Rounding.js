function round(input) {
    let num = +input[0];
    let precision = +input[1];

    if (precision > 15) {
        precision = 15;
    }

    let roundedNum = +num.toFixed(precision);

    console.log(roundedNum);
}

round([3.1415926535897932384626433832795, 2]);
round([10.5, 3]);