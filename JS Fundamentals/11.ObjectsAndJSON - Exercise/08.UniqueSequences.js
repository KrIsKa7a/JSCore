function uniqueSequences(input) {
    let set = new Map();

    for (let row of input) {
        let array = JSON.parse(row)
            .sort((a, b) => b - a);

        let arrayToString = "[" + array.join(", ") + "]";

        if (!set.has(arrayToString)) {
            set.set(arrayToString, 1);
        }
    }

    let arrays = Array.from(set.keys());

    let sortedArrays = arrays
        .sort((a, b) => JSON.parse(a).length - JSON.parse(b).length);

    for (let array of sortedArrays) {
        console.log(array);
    }
}

uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
                "[10, 1, -17, 0, 2, 13]",
                "[4, -3, 3, -2, 2, -1, 1, 0]"]
);

uniqueSequences(["[7.14, 7.180, 7.339, 80.099]",
                "[7.339, 80.0990, 7.140000, 7.18]",
                "[7.339, 7.180, 7.14, 80.099]"]
);