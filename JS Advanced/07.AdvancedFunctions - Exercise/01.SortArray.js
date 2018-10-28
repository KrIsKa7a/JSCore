function sort(numbers, type) {
    let sorted;

    if (type === "asc") {
        sorted = numbers
            .sort(sortAscending);
    } else {
        sorted = numbers
            .sort(sortDescending);
    }

    return sorted;

    function sortAscending(a, b) {
        return a - b;
    }

    function sortDescending(a, b) {
        return b - a;
    }
}

sort([14, 7, 17, 6, 8], 'asc');
sort([14, 7, 17, 6, 8], 'desc');