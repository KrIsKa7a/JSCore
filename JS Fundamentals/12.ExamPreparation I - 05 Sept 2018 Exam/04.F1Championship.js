function logRace(input) {
    let table = {};

    //This additional object will help us with sorting at the end
    let teamsWithTotalPoints = {};

    for (let row of input) {
        let tokens = row
            .split(/\s+->\s+/g);

        let teamName = tokens[0];
        let pilotName = tokens[1];
        let pilotPoints = +tokens[2];

        //Here we add points to our additional object which is not dependant on the pilots names
        if (!teamsWithTotalPoints[teamName]) {
            teamsWithTotalPoints[teamName] = pilotPoints;
        } else {
            teamsWithTotalPoints[teamName] += pilotPoints;
        }

        if (!table[teamName]) {
            table[teamName] = {};
        }

        if (!table[teamName][pilotName]) {
            table[teamName][pilotName] = pilotPoints;
        } else {
            table[teamName][pilotName] += pilotPoints;
        }
    }

    let topTeams = Object.entries(teamsWithTotalPoints)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    for (let teamInfo of topTeams) {
        let teamName = teamInfo[0];
        let teamTotalPoints = teamInfo[1];

        console.log(`${teamName}: ${teamTotalPoints}`);

        let currentTeamPilotsInfoSorted = Object.entries(table[teamName])
            .sort((a, b) => b[1] - a[1]);

        for (let pilotInfo of currentTeamPilotsInfoSorted) {
            console.log(`-- ${pilotInfo[0]} -> ${pilotInfo[1]}`);
        }
    }
}

logRace([   "Ferrari -> Kimi Raikonnen -> 25",
            "Ferrari -> Sebastian Vettel -> 18",
            "Mercedes -> Lewis Hamilton -> 10",
            "Mercedes -> Valteri Bottas -> 8",
            "Red Bull -> Max Verstapen -> 6",
            "Red Bull -> Daniel Ricciardo -> 4" ]
);