function splitString(stringGiven, delimiter) {
    let splittedString = stringGiven.split(delimiter);
    console.log(splittedString.join('\n'));
}

splitString('One-Two-Three-Four-Five', '-');