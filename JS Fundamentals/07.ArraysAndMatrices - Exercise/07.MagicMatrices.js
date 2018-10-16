function magicMatrices(matrix) {
    let rowsSum = matrix.map(r => r.reduce((a, b) => a + b));
    let colsSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

    let isMagic = true;

    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++) {
            if(rowsSum[row] == colsSum[col]) {
                isMagic = true;
            }
            else {
                isMagic = false;
                break;
            }
        }
    }
    console.log(isMagic);
}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);