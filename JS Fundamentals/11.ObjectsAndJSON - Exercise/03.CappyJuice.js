function makeJuice(input) {
    let products = {};
    let bottles = {};

    for (let row of input) {
        let tokens = row
            .split(" => ");

        let product = tokens[0];
        let quantity = +tokens[1];

        if (!products[product]) {
            products[product] = quantity;
        } else {
            products[product] += quantity;
        }

        if (products[product] >= 1000) {
            bottles[product] = Math.floor(products[product] / 1000);
        }
    }

    for (let key of Object.keys(bottles)) {
        let value = bottles[key];

        console.log(`${key} => ${value}`);
    }
}

makeJuice(['Kiwi => 234',
            'Pear => 2345',
            'Watermelon => 3456',
            'Kiwi => 4567',
            'Pear => 5678',
            'Watermelon => 6789']
);