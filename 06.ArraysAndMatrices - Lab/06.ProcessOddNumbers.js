function proccessOddNumbers(input) {
    let numbers = input
        .map(num => +num);

    let wantedNumbers = extractWantedNumbers(numbers);

    console.log(wantedNumbers.join(" "));

    function extractWantedNumbers(numbers) {
        let wantedNumbers = numbers
            .filter((num, index) => {
                return index % 2 !== 0;
            })
            .map(num => num * 2)
            .reverse();

        return wantedNumbers;
    }
}

proccessOddNumbers([3, 0, 10, 4, 7, 3]);