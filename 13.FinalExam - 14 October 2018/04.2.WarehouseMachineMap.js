//Map oriented solution
function mapSolution(input) {
    let storage = new Map();

    for (let row of input) {
        let tokens = row
            .split(', ');

        let command = tokens[0];

        if (command === "IN") {
            let brand = tokens[1];
            let coffeeName = tokens[2];
            let expireDate = tokens[3];
            let quantity = +tokens[4];

            let currentCoffee = new Map();
            currentCoffee.set("coffeeName", coffeeName);
            currentCoffee.set("expireDate", expireDate);
            currentCoffee.set("quantity", quantity);

            if (!storage.has(brand)) {
                storage.set(brand, []);
                storage.get(brand).push(currentCoffee);
            } else {
                //Map Array
                let doesIncludes = storage.get(brand)
                    .filter(map => map.get("coffeeName") === currentCoffee.get("coffeeName"));

                if (doesIncludes.length === 0) {
                    storage.get(brand).push(currentCoffee);
                } else {
                    let matchedCoffee = doesIncludes[0];

                    if (matchedCoffee.get("expireDate") < currentCoffee.get("expireDate")) {
                        matchedCoffee.set("expireDate", currentCoffee.get("expireDate"));
                        matchedCoffee.set("quantity", currentCoffee.get("quantity"));
                    } else if (matchedCoffee.get("expireDate") === currentCoffee.get("expireDate")) {
                        matchedCoffee.set("quantity", matchedCoffee.get("quantity") + currentCoffee.get("quantity"));
                    }
                }
            }
        } else if (command === "OUT") {
            let brand = tokens[1];
            let coffeeName = tokens[2];
            let expireDate = tokens[3];
            let quantity = +tokens[4];

            if (storage.has(brand)) {
                //Map Array
                let doesIncludes = storage.get(brand)
                    .filter(map => map.get("coffeeName") === coffeeName);

                if (doesIncludes.length > 0) {
                    let matchedCoffee = doesIncludes[0];

                    if (matchedCoffee.get("expireDate") > expireDate) {
                        if (matchedCoffee.get("quantity") >= quantity) {
                            matchedCoffee.set("quantity", matchedCoffee.get("quantity") - quantity);
                        }
                    }
                }
            }
        } else if (command === "REPORT") {
            console.log(">>>>> REPORT! <<<<<");

            let allBrands = storage.keys();

            for (let brand of allBrands) {
                console.log(`Brand: ${brand}:`);

                let brandCoffees = storage.get(brand);

                for (let coffeeMap of brandCoffees) {
                    let coffeName = coffeeMap.get("coffeeName");
                    let expireDate = coffeeMap.get("expireDate");
                    let quantity = coffeeMap.get("quantity");

                    console.log(`-> ${coffeName} -> ${expireDate} -> ${quantity}.`);
                }
            }
        } else if (command === "INSPECTION") {
            console.log(">>>>> INSPECTION! <<<<<");

            let allBrands = Array.from(storage.keys())
                .sort((a, b) => a.localeCompare(b));

            for (let brand of allBrands) {
                console.log(`Brand: ${brand}:`);

                let brandCoffees = storage.get(brand)
                    .sort((mapA, mapB) => mapB.get("quantity") - mapA.get("quantity"));

                for (let coffeeMap of brandCoffees) {
                    let coffeName = coffeeMap.get("coffeeName");
                    let expireDate = coffeeMap.get("expireDate");
                    let quantity = coffeeMap.get("quantity");

                    console.log(`-> ${coffeName} -> ${expireDate} -> ${quantity}.`);
                }
            }
        }
    }
}