function dnaEx(input) {
    let genomeData = {};

    let pattern = /([!@#$?a-z]+)=(\d+)--(\d+)<<([a-z]+)/;

    for (let row of input) {
        if (row === "Stop!") {
            break;
        }

        let matches = row.match(pattern);

        if (matches) {
            let name = matches[1].replace(/[^a-z]+/g, '');
            let nameLenght = +matches[2];

            if (name.length !== nameLenght) {
                continue;
            }

            let genomesCount = +matches[3];
            let organismType = matches[4];

            if (!genomeData[organismType]) {
                genomeData[organismType] = genomesCount;
            } else {
                genomeData[organismType] += genomesCount;
            }
        }
    }

    let sortedKeyValuePairs = [];

    for (let key of Object.keys(genomeData)) {
        sortedKeyValuePairs.push([key, genomeData[key]]);
    }

    sortedKeyValuePairs
        .sort((a, b) => b[1] - a[1]);

    for (let kvp of sortedKeyValuePairs) {
        console.log(`${kvp[0]} has genome size of ${kvp[1]}`);
    }
}

dnaEx([ '!@ab?si?di!a@=7--152<<human',
        'b!etu?la@=6--321<<dog',
        '!curtob@acter##ium$=14--230<<dog',
        '!some@thin@g##=9<<human',
        'Stop!' ]
);