let manager = (function () {
    let products = {
        "protein": 0,
        "carbohydrate": 0,
        "fat": 0,
        "flavour": 0
    };

    return function manage(input) {
        let tokens = input
            .split(" ");

        let operation = tokens[0];
        //It may be useful
        tokens.shift();

        let operator = {
            restock,
            prepare,
            report
        };

        return operator[operation].apply(this, tokens);

        function restock(microelement, qty) {
            products[microelement] += +qty;

            return "Success";
        }

        function prepare(recipe, quantity) {
            let neededCarb = 0;
            let neededProtein = 0;
            let neededFat = 0;
            let neededFlavours = 0;

            if (recipe === "apple") {
                neededCarb = 1 * quantity;
                neededFlavours = 2 * quantity;
            } else if (recipe === "coke") {
                neededCarb = 10 * quantity;
                neededFlavours = 20 * quantity;
            } else if (recipe === "burger") {
                neededCarb = 5 * quantity;
                neededFat = 7 * quantity;
                neededFlavours = 3 * quantity;
            } else if (recipe === "omelet") {
                neededProtein = 5 * quantity;
                neededFat = 1 * quantity;
                neededFlavours = 1 * quantity;
            } else if (recipe === "cheverme") {
                neededProtein = 10 * quantity;
                neededCarb = 10 * quantity;
                neededFat = 10 * quantity;
                neededFlavours = 10 * quantity;
            }

            let hasNeededProtein = products["protein"] >= neededProtein;
            let hasNeededCarb = products["carbohydrate"] >= neededCarb;
            let hasNeededFat = products["fat"] >= neededFat;
            let hasNeededFlavours = products["flavour"] >= neededFlavours;

            if (!hasNeededProtein) {
                return "Error: not enough protein in stock";
            } else if (!hasNeededCarb) {
                return "Error: not enough carbohydrate in stock";
            } else if (!hasNeededFat) {
                return "Error: not enough fat in stock";
            } else if (!hasNeededFlavours) {
                return "Error: not enough flavour in stock";
            } else {
                products["protein"] -= neededProtein;
                products["carbohydrate"] -= neededCarb;
                products["fat"] -= neededFat;
                products["flavour"] -= neededFlavours;

                return "Success";
            }
        }
        
        function report() {
            let proteinQty = products["protein"];
            let carbQty = products["carbohydrate"];
            let fatQty = products["fat"];
            let flavoursQty = products["flavour"];

            return `protein=${proteinQty} carbohydrate=${carbQty} fat=${fatQty} flavour=${flavoursQty}`;
        }
    };
})();
