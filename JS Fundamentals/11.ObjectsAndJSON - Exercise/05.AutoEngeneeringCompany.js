//Map solution
function engeneerCompany(input) {
    let data = new Map();

    for (let row of input) {
        let tokens = row
            .split(" | ");

        let brand = tokens[0];
        let model = tokens[1];
        let quantity = +tokens[2];

        if (!data.has(brand)) {
            data.set(brand, new Map());
        }

        if(!data.get(brand).has(model)) {
            data.get(brand).set(model, quantity);
        } else {
            data.get(brand).set(model, data.get(brand).get(model) + quantity);
        }
    }

    for (let brand of data.keys()) {
        console.log(brand);

        let modelsInfo = data.get(brand);

        for (let model of modelsInfo.keys()) {
            let currentModelQuantity = modelsInfo.get(model);

            console.log(`###${model} -> ${currentModelQuantity}`);
        }
    }
}

//Object solution as the previous task
function engeneerCompanyObject(input) {
    let data = {};

    for (let row of input) {
        let tokens = row
            .split(" | ");

        let brand = tokens[0];
        let model = tokens[1];
        let quantity = +tokens[2];

        if (!data[brand]) {
            data[brand] = {};
        }

        if(!data[brand][model]) {
            data[brand][model] = quantity;
        } else {
            data[brand][model] += quantity;
        }
    }

    for (let brand of Object.keys(data)) {
        console.log(brand);

        let modelsInfo = data[brand];

        for (let model of Object.keys(modelsInfo)) {
            let currentModelQuantity = modelsInfo[model];

            console.log(`###${model} -> ${currentModelQuantity}`);
        }
    }
}

engeneerCompanyObject(['Audi | Q7 | 1000',
                'Audi | Q6 | 100',
                'BMW | X5 | 1000',
                'BMW | X6 | 100',
                'Citroen | C4 | 123',
                'Volga | GAZ-24 | 1000000',
                'Lada | Niva | 1000000',
                'Lada | Jigula | 1000000',
                'Citroen | C4 | 22',
                'Citroen | C5 | 10']
);