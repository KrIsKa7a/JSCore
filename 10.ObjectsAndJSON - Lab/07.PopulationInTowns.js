function calcTownsPopulation(input) {
    let register = {};

    for (let row of input) {
        let rowSplitted = row
            .split(" <-> ");

        let townName = rowSplitted[0];
        let townPopulation = +rowSplitted[1];

        if (!register[townName]) {
            register[townName] = townPopulation;
        } else {
            register[townName] += townPopulation;
        }
    }

    for (let key of Object.keys(register)) {
        console.log(`${key} : ${register[key]}`);
    }
}

calcTownsPopulation(['Sofia <-> 1200000',
                    'Montana <-> 20000',
                    'New York <-> 10000000',
                    'Washington <-> 2345000',
                    'Las Vegas <-> 1000000']
);