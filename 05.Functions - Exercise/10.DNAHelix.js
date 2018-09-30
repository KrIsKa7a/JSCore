function dnaHelix(rows) {
    let sequence = "ATCGTTAGGG";

    let currentRow = 0;
    let currentIndex = 0;

    for (let row = 0; row < rows; row++) {
        if (currentRow > 3) {
            currentRow %= 4;
        }

        if (currentIndex >= 10) {
            currentIndex = 0;
        }

        if (currentRow === 0) {
            console.log(`**${sequence[currentIndex++]}${sequence[currentIndex++]}**`);
        } else if (currentRow === 1 || currentRow === 3) {
            console.log(`*${sequence[currentIndex++]}--${sequence[currentIndex++]}*`);
        } else if (currentRow === 2) {
            console.log(`${sequence[currentIndex++]}----${sequence[currentIndex++]}`);
        }

        currentRow++;
    }
}

dnaHelix(10);