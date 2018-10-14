//Object oriented solution
function warehouseMachineObject(input) {
    let storage = {};

    for (let row of input) {
        let tokens = row
            .split(', ');

        let command = tokens[0];

        if (command === "IN") {
            let coffeeBrand = tokens[1];
            let coffee = tokens[2];
            let expireDate = tokens[3];
            let quantity = +tokens[4];

            let currentCoffeeObj = {
                coffee: coffee,
                expireDate: expireDate,
                quantity: quantity
            };

            if (!storage[coffeeBrand]) {
                storage[coffeeBrand] = [];

                storage[coffeeBrand].push(currentCoffeeObj);
            } else {
                let allCoffee = storage[coffeeBrand];

                let doesInclude = allCoffee
                    .filter(obj => {
                        return obj.coffee === currentCoffeeObj.coffee;
                    });

                if (doesInclude.length === 0) {
                    storage[coffeeBrand].push(currentCoffeeObj);
                } else {
                    let matchedCoffee = doesInclude[0];

                    if (matchedCoffee.expireDate < currentCoffeeObj.expireDate) {
                        /*let indexOfOldCoffee = storage[coffeeBrand].indexOf(matchedCoffee);
                        storage[coffeeBrand].splice(indexOfOldCoffee, 1);
                        storage[coffeeBrand].push(currentCoffeeObj);*/
                        matchedCoffee.expireDate = currentCoffeeObj.expireDate;
                        matchedCoffee.quantity = currentCoffeeObj.quantity;
                    } else if (matchedCoffee.expireDate === currentCoffeeObj.expireDate) {
                        matchedCoffee.quantity += currentCoffeeObj.quantity;
                    }
                }
            }
        } else if (command === "OUT") {
            let coffeeBrand = tokens[1];
            let coffee = tokens[2];
            let expireDate = tokens[3];
            let quantity = +tokens[4];

            if (storage[coffeeBrand]) {
                let doesInclude = storage[coffeeBrand]
                    .filter(obj => {
                        return obj.coffee === coffee;
                    });

                if (doesInclude.length > 0) {
                    let matchedCoffee = doesInclude[0];

                    if (matchedCoffee.expireDate > expireDate) {
                        if (matchedCoffee.quantity >= quantity) {
                            matchedCoffee.quantity -= quantity;
                        }
                    }
                }
            }
        } else if (command === "REPORT") {
            console.log(">>>>> REPORT! <<<<<");

            let brands = Object.keys(storage);

            for (let currentBrand of brands) {
                console.log(`Brand: ${currentBrand}:`);

                //Array
                let brandCoffees = storage[currentBrand];

                for (let coffeeObj of brandCoffees) {
                    console.log(`-> ${coffeeObj.coffee} -> ${coffeeObj.expireDate} -> ${coffeeObj.quantity}.`);
                }
            }
        } else if (command === "INSPECTION") {
            console.log(">>>>> INSPECTION! <<<<<");

            let brandsSorted = Object.keys(storage)
                .sort((a, b) => a.localeCompare(b));

            for (let currentBrand of brandsSorted) {
                console.log(`Brand: ${currentBrand}:`);

                //Array
                let brandCoffeesSorted = storage[currentBrand]
                    .sort((a, b) => b.quantity - a.quantity);

                for (let coffeeObj of brandCoffeesSorted) {
                    console.log(`-> ${coffeeObj.coffee} -> ${coffeeObj.expireDate} -> ${coffeeObj.quantity}.`);
                }
            }
        }
    }
}