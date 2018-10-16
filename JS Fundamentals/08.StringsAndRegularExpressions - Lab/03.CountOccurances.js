//Fast solution but it doesn't have overlapping
function countOccurances(word, text) {
    let wordIndex = text.indexOf(word);

    let counter = 0;

    while (wordIndex >= 0) {
        text = text.substring(wordIndex + word.length, text.length);

        counter++;

        wordIndex = text.indexOf(word);
    }

    console.log(counter);
}

//Overlapping solution
function overlapping(word, text) {
    let counter = 0;
    let currentIndex = 0;

    while (currentIndex < text.length) {
        let currentSubstr = text.substr(currentIndex, word.length);

        if (currentSubstr === word) {
            counter++;
        }

        currentIndex++;
    }

    console.log(counter);
}

overlapping('aa', 'aaaaaa');
overlapping('ma', 'Marine mammal training is the training and caring ' +
    'for marine life such as, dolphins, killer whales, sea lions, walruses, ' +
    'and other marine mammals. It is also a duty of the trainer to do mental ' +
    'and physical exercises to keep the animal healthy and happy.');