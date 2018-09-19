function findBinaryAlgorithmOfNumbers(numbers) {
    for (let num of numbers) {
        console.log(Math.log2(+num));
    }
}

findBinaryAlgorithmOfNumbers([256]);