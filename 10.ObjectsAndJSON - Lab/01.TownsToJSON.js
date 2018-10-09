function convertTownsToJSON(input) {
    let splitPattern = /\s*\|\s*/g;

    let objects = returnTownInfoAsObjectArray(input, splitPattern);

    let objectsAsStrings = JSON.stringify(objects);

    console.log(objectsAsStrings);

    function returnTownInfoAsObjectArray(input, pattern) {
        let objects = [];

        for (let i = 1; i < input.length; i++) {
            let currentRow = input[i];

            let splitted = currentRow
                .split(pattern)
                .filter(el => el !== "");

            let currentTownObj = {
                Town: splitted[0],
                Latitude: +splitted[1],
                Longitude: +splitted[2]
            };

            objects.push(currentTownObj);
        }

        return objects;
    }
}

convertTownsToJSON([
                    '| Town | Latitude | Longitude |',
                    '| Sofia | 42.696552 | 23.32601 |',
                    '| Beijing | 39.913818 | 116.363625 |'
                ]
);