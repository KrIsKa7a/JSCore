function reverseString(input) {
    let wholeText = input.join('');
    let textReversed = wholeText
        .split('')
        .reverse()
        .join('');

    console.log(textReversed);
}

reverseString(['I', 'am', 'student']);
reverseString(['race', 'car']);