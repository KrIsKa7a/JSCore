function sortArray(array) {
    array.sort((a, b) => comparator(a, b));

    console.log(array.join('\n'));

    function comparator(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            } else if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            } else {
                return 0;
            }
        }
    }
}

sortArray(['test',
    'Deny',
    'omen',
    'Default']

);