function biggestNumber(input) {
    //Let's make it more usable and make it work with more than three numbers
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (let num of input){
        if (+num > biggestNumber) {
            biggestNumber = +num;
        }
    }

    console.log(biggestNumber);
}

biggestNumber([-10, -20, -30]);