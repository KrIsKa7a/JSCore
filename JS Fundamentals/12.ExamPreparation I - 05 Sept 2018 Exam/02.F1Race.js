function logF1Race(input) {
    let pilots = input
        .shift()
        .split(/\s+/g);

    for (let row of input) {
        let tokens = row
            .split(/\s+/g);

        let command = tokens[0];
        let pilotProccessed = tokens[1];

        if (command === "Join") {
            if (!pilots.includes(pilotProccessed)) {
                pilots.push(pilotProccessed);
            }
        } else if (command === "Crash") {
            if (pilots.includes(pilotProccessed)) {
                let indexOfWantedPilot = pilots.indexOf(pilotProccessed);

                pilots.splice(indexOfWantedPilot, 1);
            }
        } else if (command === "Pit") {
            let indexOfWantedPilot = pilots.indexOf(pilotProccessed);
            if (indexOfWantedPilot >= 0 && indexOfWantedPilot < pilots.length - 1) {
                //It may not work xD
                let pilotOvertaking = pilots[indexOfWantedPilot + 1];
                pilots[indexOfWantedPilot] = pilotOvertaking;
                pilots[indexOfWantedPilot + 1] = pilotProccessed;
            }
        } else if (command === "Overtake") {
            let indexOfWantedPilot = pilots.indexOf(pilotProccessed);

            if (indexOfWantedPilot > 0) {
                let pilotInFrontOfUs = pilots[indexOfWantedPilot - 1];
                pilots[indexOfWantedPilot] = pilotInFrontOfUs;
                pilots[indexOfWantedPilot - 1] = pilotProccessed;
            }
        }
    }

    console.log(pilots.join(" ~ "));
}

logF1Race([ "Vetel Hamilton Slavi",
            "Pit Hamilton",
            "Overtake Vetel",
            "Crash Slavi"]
);

logF1Race([ "Vetel Hamilton Raikonnen Botas Slavi",
            "Pit Hamilton",
            "Overtake LeClerc",
            "Join Ricardo",
            "Crash Botas",
            "Overtake Ricardo",
            "Overtake Ricardo",
            "Overtake Ricardo",
            "Crash Slavi"]
);