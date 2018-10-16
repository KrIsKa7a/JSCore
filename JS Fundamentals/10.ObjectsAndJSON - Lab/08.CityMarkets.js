function makeCityMarketsRegister(input) {
    let register = {};

    for (let row of input) {
        let rowSplitted = row
            .split(" -> ");

        let townName = rowSplitted[0];
        let product = rowSplitted[1];
        let productIncomeInfo = rowSplitted[2]
            .split(" : ");
        let productAmount = +productIncomeInfo[0];
        let productPricePerUnit = +productIncomeInfo[1];

        let productTotalIncome = productAmount * productPricePerUnit;

        if (!register[townName]) {
            register[townName] = {};
        }

        if (!register[townName][product]) {
            register[townName][product] = productTotalIncome;
        } else {
            register[townName][product] += productTotalIncome;
        }
    }

    for (let town of Object.keys(register)) {
        console.log(`Town - ${town}`);

        let townInfo = register[town];

        for (let product of Object.keys(townInfo)) {
            console.log("$$$" + `${product} : ${townInfo[product]}`);
        }
    }
}

makeCityMarketsRegister(['Sofia -> Laptops HP -> 200 : 2000',
                        'Sofia -> Raspberry -> 200000 : 1500',
                        'Sofia -> Audi Q7 -> 200 : 100000',
                        'Montana -> Portokals -> 200000 : 1',
                        'Montana -> Qgodas -> 20000 : 0.2',
                        'Montana -> Chereshas -> 1000 : 0.3']
);