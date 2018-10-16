function calcLowestPricesInCity(input) {
    let productsRegister = {};

    for (let row of input) {
        let rowSplitted = row
            .split(" | ");

        let townName = rowSplitted[0];
        let productName = rowSplitted[1];
        let productPrice = +rowSplitted[2];

        if (!productsRegister[productName]) {
            productsRegister[productName] = {};
        }

        productsRegister[productName][townName] = productPrice;
    }

    for (let productName of Object.keys(productsRegister)) {
        let productInfo = productsRegister[productName];

        let lowestTownName = undefined;
        let lowestPrice = Number.MAX_SAFE_INTEGER;

        for (let townName of Object.keys(productInfo)) {
            let currentTownPrice = productInfo[townName];

            if (currentTownPrice < lowestPrice) {
                lowestTownName = townName;
                lowestPrice = currentTownPrice;
            }
        }

        console.log(`${productName} -> ${lowestPrice} (${lowestTownName})`);
    }
}

calcLowestPricesInCity(['Sample Town | Sample Product | 1000',
                        'Sample Town | Orange | 2',
                        'Sample Town | Peach | 1',
                        'Sofia | Orange | 3',
                        'Sofia | Peach | 2',
                        'New York | Sample Product | 1000.1',
                        'New York | Burger | 10']
);