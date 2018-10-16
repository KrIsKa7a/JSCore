function multiplyMatches(input) {
    let matchPattern = /(\-*\d+)\s*\*\s*(\-*\d+\.*\d*)/;
    let currentMatch;

    while (currentMatch = input.match(matchPattern)) {
        let sum = +currentMatch[1] * + currentMatch[2];
        input = input.replace(matchPattern, sum);
    }

    console.log(input);
}

multiplyMatches('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');