function calcSumByTown(input) {
    let obj = {};

    for (let i = 0; i < input.length; i += 2) {
        let townName = input[i];
        let townSum = +input[i + 1];

        if (!obj[townName]) {
            obj[townName] = townSum;
        } else {
            obj[townName] += townSum;
        }
    }

    console.log(JSON.stringify(obj));
}

calcSumByTown(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4']
);

calcSumByTown(['Sofia',
    '20',
    'Varna',
    '3',
    'sofia',
    '5',
    'varna',
    '4']
);