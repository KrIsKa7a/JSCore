function lastKNumbersSequence(n, k) {
    let array = [];
    array[0] = 1;
    array[1] = 1;
    array[2] = 2;

    if (k === 1) {
        for (let i = 0; i < n; i++) {
            array[i] = 1;
        }

        console.log(array.join(" "));
        return;
    }

    for (let i = 3; i < n; i++) {
        array[i] = findSumOfLastKElements(array, k);
    }

    console.log(array.join(" "));

    function findSumOfLastKElements(array, k) {
        let arrayCopy = array.slice(0);

        let sum = arrayCopy
            .reverse()
            .filter((num, index) => {
                return index < k;
            })
            .reduce((acc, currentEl) => {
                return acc + currentEl;
            }, 0);

        return sum;
    }
}

lastKNumbersSequence(6, 1);
lastKNumbersSequence(8, 2);
lastKNumbersSequence(6, 6);