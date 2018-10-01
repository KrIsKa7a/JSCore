function negativeOrPositiveNumbers(input) {
    let numbers = input
        .map(num => +num);

    let sortedArray = getSortedArray(numbers);

    sortedArray
        .forEach(e => console.log(e));

    function getSortedArray(numbers) {
        let sortedArray = [];

        for (let number of numbers) {
            if (number < 0) {
                sortedArray.unshift(number);
            } else {
                sortedArray.push(number);
            }
        }

        return sortedArray;
    }
}

negativeOrPositiveNumbers([3, -2, 0, -1]);