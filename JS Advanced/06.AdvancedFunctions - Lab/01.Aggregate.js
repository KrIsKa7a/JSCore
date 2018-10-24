function aggregate(input) {
    let sum = input.reduce(function (acc, cur) {
        return acc + cur;
    }, 0);
    let min = input.reduce((acc, cur) => Math.min(acc, cur));
    let max = input.reduce((acc, cur) => Math.max(acc, cur));
    let product = input.reduce(function (acc, cur) {
        return acc * cur;
    }, 1);
    let joined = input.reduce((acc, cur) => acc + "" + cur);

    console.log("Sum = " + sum);
    console.log("Min = " + min);
    console.log("Max = " + max);
    console.log("Product = " + product);
    console.log("Join = " + joined);
}

aggregate([2,3,10,5]);