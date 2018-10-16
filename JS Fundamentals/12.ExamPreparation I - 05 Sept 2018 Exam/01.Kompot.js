function makeCompot(input) {
    let cherryKg = 0;
    let plumsKg = 0;
    let peachesKg = 0;
    let bucket = 0;

    for (let row of input) {
        let tokens = row
            .split(/\s+/g);

        //We do .lowercase() if they pass some edge cases. It is not mentioned in problem description!
        let fruitType = tokens[0].toLowerCase();
        let fruitKg = +tokens[1];

        if (fruitType === "peach") {
            peachesKg += fruitKg;
        } else if (fruitType === "plum") {
            plumsKg += fruitKg;
        } else if (fruitType === "cherry") {
            cherryKg += fruitKg;
        } else {
            bucket += fruitKg;
        }
    }

    let peachKompots = Math.floor((peachesKg * 1000) / 140 / 2.5);
    let plumsKompots = Math.floor((plumsKg * 1000) / 20 / 10);
    let cherryKompots = Math.floor((cherryKg * 1000) / 9 / 25);
    let rakiaCount = bucket * 0.2;

    console.log(`Cherry kompots: ${cherryKompots}`);
    console.log(`Peach kompots: ${peachKompots}`);
    console.log(`Plum kompots: ${plumsKompots}`);
    console.log(`Rakiya liters: ${rakiaCount.toFixed(2)}`);
}

makeCompot( [   'cherry 1.2',
                'peach 2.2',
                'plum 5.2',
                'peach 0.1',
                'cherry 0.2',
                'cherry 5.0',
                'plum 10',
                'cherry 20.0' ,
                'papaya 20' ]
);