function extractText(text) {
    let openingParanthesis = '(';
    let closingParanthesis = ')';

    let indexOfOpening = text.indexOf(openingParanthesis);
    let indexOfClosing = text.indexOf(closingParanthesis);

    let markedWords = [];

    while (indexOfOpening >= 0 && indexOfClosing >= 1) {
        let word = text.substring(indexOfOpening + 1, indexOfClosing);

        text = text.substring(indexOfClosing + 1, text.length);

        markedWords.push(word);

        indexOfOpening = text.indexOf(openingParanthesis);
        indexOfClosing = text.indexOf(closingParanthesis);
    }

    console.log(markedWords.join(', '));
}

extractText();