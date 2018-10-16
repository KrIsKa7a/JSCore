function countWords(input) {
    let text = input[0];

    let pattern = /\w+/g;

    let matches = text.match(pattern);

    let wordCounter = {};

    for (let word of matches) {
        if (!wordCounter[word]) {
            wordCounter[word] = 1;
        } else {
            wordCounter[word] += 1;
        }
    }

    console.log(JSON.stringify(wordCounter));
}

countWords(["Far too slow, you're far too slow."]);
countWords(['JS devs use Node.js for server-side JS.-- JS for devs']);