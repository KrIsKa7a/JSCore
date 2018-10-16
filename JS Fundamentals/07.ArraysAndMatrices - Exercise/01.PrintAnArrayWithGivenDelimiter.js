function printGivenArray(array) {
    let delimiter = array.pop();

    console.log(array.join(delimiter));
}

printGivenArray(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']
);