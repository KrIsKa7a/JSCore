function biggestElement(matrix) {
    let biggestElement = findBiggestElement(matrix);

    console.log(biggestElement);

    function findBiggestElement(matrix) {
        let rowsBiggestElements = [];

        for (let row = 0; row < matrix.length; row++) {
            let currentRowBiggestElement = matrix[row]
                .sort((a, b) => b - a)[0];

            rowsBiggestElements.push(currentRowBiggestElement);
        }

        let biggestElement = rowsBiggestElements
            .sort((a, b) => b - a)[0];

        return biggestElement;
    }
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]
);