function printEveryNthElementFromArray(array) {
    let step = +array.pop();

    for (let i = 0; i < array.length; i += step) {
        console.log(array[i]);
    }
}

printEveryNthElementFromArray(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
);