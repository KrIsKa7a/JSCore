function calcCompoundInterest(input) {
    let principalSum = +input[0];
    let interestRateInPercents = +input[1] / 100;
    let compoundingPeriod = +input[2];
    let totalTime = +input[3];

    let compoundFrequency = 12 / compoundingPeriod;

    let sol = principalSum * Math.pow((1 + (interestRateInPercents / compoundFrequency)), compoundFrequency * totalTime);

    console.log(sol.toFixed(2));
}

calcCompoundInterest([1500, 4.3, 3, 6]);