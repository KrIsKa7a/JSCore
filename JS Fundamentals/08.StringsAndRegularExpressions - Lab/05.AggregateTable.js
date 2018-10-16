function aggregateTable(table) {
    let townNames = [];
    let townsIncome = 0;

    for (let currentRow of table) {
        let splittedRow = currentRow
            .split('|')
            .filter(el => el !== '');

        let townName = splittedRow[0].toString().trim();
        let income = +(splittedRow[1].toString().replace(/' '/g, ''));

        townNames.push(townName);
        townsIncome += income;
    }

    console.log(townNames.join(', '));
    console.log(townsIncome);
}

aggregateTable(['| Sofia           | 300',
                '| Veliko Tarnovo  | 500',
                '| Yambol          | 275']
);