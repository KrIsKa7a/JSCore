function assignProperties(input) {
    let key1 = input[0];
    let val1 = input[1];
    let key2 = input[2];
    let val2 = input[3];
    let key3 = input[4];
    let val3 = input[5];

    let obj = {};

    obj[key1] = val1;
    obj[key2] = val2;
    obj[key3] = val3;

    return obj;
}

//Let's make more generic solution working with more than three pairs

function genericSol(input) {
    //We should be sure that they won't pass us key with no value
    if (input.length % 2 !== 0) {
        console.log("Invalid number of arguments!");
    }

    //Let's declare our object that will hold all info
    let obj = {};

    for (let i = 0; i < input.length; i += 2) {
        let key = input[i];
        let val = input[i + 1];

        obj[key] = val;
    }

    return obj;
}

//It is passing judge :)