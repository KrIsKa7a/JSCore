function extractSubsequence(array) {
    let numbers = array
        .map(num => +num);

    let filteredArray = [];
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];

        if (currentNum >= biggestNumber) {
            biggestNumber = currentNum;
            filteredArray.push(currentNum);
        }
    }

    console.log(filteredArray.join('\n'));
}

extractSubsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]

);