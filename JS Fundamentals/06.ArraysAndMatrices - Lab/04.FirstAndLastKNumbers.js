function firstAndLastKNumbers(input) {
    let numbers = input
        .map(num => +num);

    let k = numbers[0];

    numbers.shift();

    let firstNumbers = findFirstKElements(numbers, k);
    let lastNumbers = findLastKElements(numbers, k);

    console.log(firstNumbers.join(" "));
    console.log(lastNumbers.join(" "));

    function findFirstKElements(numbers, k) {
        let firstNumbers = numbers
            .filter((num, index) => {
                return index < k;
            });

        return firstNumbers;
    }

    function findLastKElements(numbers, k) {
        let lastNumbers = numbers
            .reverse()
            .filter((num, index) => {
               return index < k;
            })
            .reverse();

        return lastNumbers;
    }
}

firstAndLastKNumbers([2,
    7, 8, 9]
);