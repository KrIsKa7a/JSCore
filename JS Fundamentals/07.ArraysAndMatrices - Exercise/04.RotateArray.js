function rotateArray(array) {
    let rotationTimes = array.pop() % array.length;

    for (let i = 0; i < rotationTimes; i++) {
        let itemToUnShift = array.pop();
        array.unshift(itemToUnShift);
    }

    console.log(array.join(" "));
}

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
);