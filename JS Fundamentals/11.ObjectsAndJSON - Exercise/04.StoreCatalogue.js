//Silly solution using data structure with Object arrays
//At the end i found out the correct way but i was lazy for rewriting the code xD
function makeCatalogue(input) {
    let data = {};

    for (let row of input) {
        let tokens = row
            .split(" : ");

        let productName = tokens[0];
        let price = +tokens[1];

        let productFirstLetter = productName
            .charAt(0)
            .toUpperCase();

        if (!data[productFirstLetter]) {
            data[productFirstLetter] = [];
        }

        let productObj = {};
        productObj[productName] = price;

        data[productFirstLetter].push(productObj);
    }

    printOutput(data);

    function printOutput(data) {
        let keysSortedAlphabetically = Array.from(Object.keys(data))
            .sort((a, b) => a.localeCompare(b));

        for (let key of keysSortedAlphabetically) {
            console.log(key);

            let keyData = data[key];

            let productsSortedAlphabetically = keyData
                .sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));

            for (let productKeyValue of productsSortedAlphabetically) {
                console.log(`  ${Object.keys(productKeyValue)[0]}: ${Object.values(productKeyValue)[0]}`);
            }
        }
    }
}

makeCatalogue(['Banana : 2',
                "Rubic's Cube : 5",
                'Raspberry P : 4999',
                'Rolex : 100000',
                'Rollon : 10',
                'Rali Car : 2000000',
                'Pesho : 0.000001',
                'Barrel : 10']

);