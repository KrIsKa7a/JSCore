function createHTMLIMGTag(input) {
    let src = input[0];
    let alt = input[1];

    console.log(`<img src="${src}" alt="${alt}">`);
}

createHTMLIMGTag(['smiley.gif', 'Smiley Face']);