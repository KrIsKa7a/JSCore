function capitalizeWords(input) {
    let words = input
        .split(' ')
        .map((word) => {
            return word.split('')[0].toUpperCase() +
                word.toLowerCase().substring(1);
        })
        .join(' ');

    console.log(words);
}

capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');