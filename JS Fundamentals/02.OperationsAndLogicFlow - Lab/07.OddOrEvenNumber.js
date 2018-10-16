function checkIfNumberIsOddOrEven(num) {
    if (!Number.isInteger(+num)) {
        console.log("invalid");
    } else {
        if (+num % 2 === 0) {
            console.log("even");
        } else {
            console.log("odd");
        }
    }
}

checkIfNumberIsOddOrEven(3.5);