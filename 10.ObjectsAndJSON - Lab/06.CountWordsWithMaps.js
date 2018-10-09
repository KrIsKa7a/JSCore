function countWords(input) {
    let text = input[0];

    let pattern = /\w+/g;

    let matches = text.match(pattern)
        .map(el => el.toLowerCase());

    let wordCounter = new Map();

    for (let word of matches) {
        if (!wordCounter.has(word)) {
            wordCounter.set(word, 1);
        } else {
            wordCounter.set(word, wordCounter.get(word) + 1);
        }
    }

    let sortedWords = sortWordsCounter(wordCounter);

    sortedWords
        .forEach((v, k) => {
            console.log(`'${k}' -> ${v} times`);
        });

    function sortWordsCounter(wordCounter) {
        let sortedWords = new Map([...wordCounter.entries()].sort());

        return sortedWords;
    }
}

countWords(["Far too slow, you're far too slow."]);