function checkIfNumberIsPrime(num) {
    let isPrime = true;

    for (let i = 2; i < Math.sqrt(num); i++) {

        if (num % i === 0) {

            isPrime = false;

            break;
        }
    }

    return isPrime && (num > 1);
}