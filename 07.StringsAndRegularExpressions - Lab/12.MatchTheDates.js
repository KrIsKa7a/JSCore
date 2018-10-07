function matchTheDates(input) {
    let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;

    for (let row of input) {
        let dateInfo;

        while ((dateInfo = pattern.exec(row)) !== null) {
            console.log(`${dateInfo[0]} (Day: ${dateInfo[1]}, Month: ${dateInfo[2]}, Year: ${dateInfo[3]})`);
        }
    }
}

matchTheDates(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.']
);