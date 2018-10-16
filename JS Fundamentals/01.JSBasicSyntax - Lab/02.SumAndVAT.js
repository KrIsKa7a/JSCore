function calculateSumAndVAT(prices){
    let sum = 0;

    for(let price of prices){
        sum += +price;
    }

    let VAT = sum * 0.20;
    let total = sum + VAT;

    console.log("sum = " + sum);
    console.log("VAT = " + VAT);
    console.log("total = " + total)
}

calculateSumAndVAT([1.20, 2.60, 3.50])