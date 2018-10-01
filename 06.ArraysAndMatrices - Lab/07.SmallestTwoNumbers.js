function findSmallestTwoNumbers(input) {
    let numbers = input
        .map(num => +num);

    let smallestTwoNumbers = extractSmallestTwoNumbers(numbers);

    console.log(smallestTwoNumbers.join(" "));
    
    function extractSmallestTwoNumbers(numbers) {
        let smallestTwoNumbers = numbers
            .sort((a, b) => a - b)
            .slice(0, 2);

        return smallestTwoNumbers;
    }
}

findSmallestTwoNumbers([3, 0, 10, 4, 7, 3]);