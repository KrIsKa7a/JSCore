function diagonalSums(matrix) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        leftDiagonalSum += matrix[row][row];
        rightDiagonalSum += matrix[row][matrix[row].length - row - 1];
    }

    console.log(leftDiagonalSum + " " + rightDiagonalSum);
}

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);