function diagonalMatrix(input) {
    let matrix = input
        .map((row) => {
            return row
                .split(" ")
                .map(e => +e);
        });

    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        leftDiagonalSum += matrix[row][row];
        rightDiagonalSum += matrix[row][matrix[row].length - row - 1];
    }

    if (leftDiagonalSum === rightDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col && col !== matrix[row].length - row - 1) {
                    matrix[row][col] = leftDiagonalSum;
                }
            }
        }
    }

    matrix.forEach((row) => {
        console.log(row.join(" "));
    });
}


diagonalMatrix(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);