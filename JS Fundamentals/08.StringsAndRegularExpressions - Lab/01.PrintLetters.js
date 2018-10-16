function printLetters(word) {
    for (let currentLetterIndex in  word) {
        console.log(`str[${currentLetterIndex}] -> ${word[currentLetterIndex]}`);
    }
}

printLetters('Hello Softuni')