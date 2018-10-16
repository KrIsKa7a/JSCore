function invertory(input) {
    let data = [];

    for (let row of input) {
        let tokens = row
            .split(' / ');
        let heroName = tokens[0];
        let heroLevel = +tokens[1];
        let heroWeapons = [];
        if (tokens[2]) {
            heroWeapons = tokens[2]
                .split(', ');
        }
        let hero = {
          name: heroName,
          level: heroLevel,
          items: heroWeapons
        };

        data.push(hero);
    }

    console.log(JSON.stringify(data));
}

invertory(['Jake / 1000 ']);