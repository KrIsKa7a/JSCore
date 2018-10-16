function atmMachine(input) {
    let atmBalance = 0;
    let atmBanknotes = {};

    for (let commandRow of input) {
        if (commandRow.length > 2) {
            let totalInsertedCash = 0;
            for (let banknote of commandRow) {
                banknote = +banknote;

                atmBalance += banknote;
                totalInsertedCash += banknote;

                if (!atmBanknotes[banknote]) {
                    atmBanknotes[banknote] = 1;
                } else {
                    atmBanknotes[banknote]++;
                }
            }

            console.log(`Service Report: ${totalInsertedCash}$ inserted. Current balance: ${atmBalance}$.`);
        } else if (commandRow.length === 2) {
            let personBalance = +commandRow[0];
            let moneyToWithDraw = +commandRow[1];

            if (personBalance < moneyToWithDraw) {
                console.log(`Not enough money in your account. Account balance: ${personBalance}$.`);
            } else if (atmBalance < moneyToWithDraw) {
                console.log(`ATM machine is out of order!`);
            } else {
                console.log(`You get ${moneyToWithDraw}$. Account balance: ${personBalance - moneyToWithDraw}$. Thank you!`);

                atmBalance -= moneyToWithDraw;

                let banknotesInAtm = Object.keys(atmBanknotes)
                    .filter(b => atmBanknotes[b] !== 0)
                    .sort((a, b) => b - a);

                for (let currentAtmBanknote of banknotesInAtm) {
                    if (currentAtmBanknote <= moneyToWithDraw) {
                        let neededBanknotes = Math.floor(moneyToWithDraw / +currentAtmBanknote);
                        let weHave = atmBanknotes[currentAtmBanknote];

                        let taken = Math.min(neededBanknotes, weHave);

                        atmBanknotes[currentAtmBanknote] -= taken;

                        moneyToWithDraw -= taken * currentAtmBanknote;

                        if (moneyToWithDraw === 0) {
                            break;
                        }
                        //atmBanknotes[moneyToWithDraw] -= 1;
                    }
                }
            }
        } else if (commandRow.length === 1) {
            let wantedBanknote = +commandRow[0];
            let countOfWantedBanknote = atmBanknotes[wantedBanknote];

            if (countOfWantedBanknote === undefined) {
                countOfWantedBanknote = 0;
            }

            console.log(`Service Report: Banknotes from ${wantedBanknote}$: ${countOfWantedBanknote}.`);
        }
    }
}