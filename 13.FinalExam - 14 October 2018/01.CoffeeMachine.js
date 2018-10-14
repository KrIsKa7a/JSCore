function coffeeMachine(input) {
    let totalIncome = 0;

    for (let l of input) {
        let row = l
            .split(', ');

        let orderTotalPrice = 0;
        let moneyInserted = +row[0];
        let drinkType = row[1];

        if (drinkType === "coffee") {
            let coffeeType = row[2];

            if (coffeeType === "caffeine") {
                orderTotalPrice = 0.80;
            } else if (coffeeType === "decaf") {
                orderTotalPrice = 0.90;
            }

            let haveMilk = row.length === 5;
            let sugarIndex = 3;

            if (haveMilk) {
                let milkPrice = +(orderTotalPrice * 0.10).toFixed(1);

                orderTotalPrice += milkPrice;
                sugarIndex = 4;
            }

            let sugarQuantity = +row[sugarIndex];

            if (sugarQuantity > 0) {
                orderTotalPrice += 0.10;
            }
        } else if (drinkType === "tea") {
            orderTotalPrice = 0.80;

            let hasMilk = row.length === 4;
            let sugarIndex = 2;

            if (hasMilk) {
                let milkPrice = +(orderTotalPrice * 0.10).toFixed(1);

                orderTotalPrice += milkPrice;

                sugarIndex = 3;
            }

            let sugarQuantity = +row[sugarIndex];

            if (sugarQuantity > 0) {
                orderTotalPrice += 0.10;
            }
        }

        if (moneyInserted >= orderTotalPrice) {
            let change = moneyInserted - orderTotalPrice;

            totalIncome += orderTotalPrice;

            console.log(`You ordered ${drinkType}. Price: ${orderTotalPrice.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
        } else {
            let moneyMoreNeeded = orderTotalPrice - moneyInserted;

            console.log(`Not enough money for ${drinkType}. Need ${moneyMoreNeeded.toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}$`);
}