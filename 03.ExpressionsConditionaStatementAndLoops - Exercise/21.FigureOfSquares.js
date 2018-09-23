function drawFigureOfSquares(n) {
    //Just checking edge case
    if (n===2){
        console.log("+++");
        return;
    }

    let countOfDashes = 2 * n - 4;
    let countOfDashesFromEachSide = countOfDashes / 2;

    //We have to find the substractor depending on that if n is odd or even
    let substractor = 0;

    if (n % 2 === 0) {
        substractor = 4;
    } else {
        substractor = 3;
    }

    let countOfLinesWithSpaces = n - substractor;
    let countOfLinesWithSpacesOnEachIter = countOfLinesWithSpaces / 2;

    //We make the string for the rows with dashes and for the rows with spaces
    let dashesRow = `+${'-'.repeat(countOfDashesFromEachSide)}+${'-'.repeat(countOfDashesFromEachSide)}+`;
    let spacesRow = `|${' '.repeat(countOfDashesFromEachSide)}|${' '.repeat(countOfDashesFromEachSide)}|`;

    //We print the first row
    console.log(dashesRow);

    for (let spaceRow = 0; spaceRow < countOfLinesWithSpacesOnEachIter; spaceRow++) {
        console.log(spacesRow);
    }

    console.log(dashesRow);

    for (let spaceRow = 0; spaceRow < countOfLinesWithSpacesOnEachIter; spaceRow++) {
        console.log(spacesRow);
    }

    console.log(dashesRow);
}

drawFigureOfSquares(3);