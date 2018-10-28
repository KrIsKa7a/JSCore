function argumentInfo() {
    let types = {};

    for (let argumentPassed of arguments) {
        let type = typeof  argumentPassed;

        if (!types[type]) {
            types[type] = 1;
        } else {
            types[type] += 1;
        }

        console.log(`${type}: ${argumentPassed}`);
    }

    let sorted = [];

    for (let key of Object.keys(types)) {
        let kvp = [key, types[key]];

        sorted.push(kvp);
    }

    sorted
        .sort((a, b) => b[1] - a[1])
        .forEach(el => console.log(`${el[0]} = ${el[1]}`));
}

argumentInfo('cat', 42, 420, function () { console.log('Hello world!'); });