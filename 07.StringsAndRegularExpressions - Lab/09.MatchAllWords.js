function matchAllWords(input) {
    let pattern = /\w+/g;

    let matches = input.match(pattern);

    console.log(matches.join("|"));
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');