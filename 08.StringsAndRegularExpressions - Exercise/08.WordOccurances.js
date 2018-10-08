function findWordOccurances(sentence, word) {
    let pattern = new RegExp(`\\b${word}\\b`, 'gi');

    let matches = sentence.match(pattern);

    console.log(matches ? matches.length : 0);
}

findWordOccurances('The waterfall was so high, that the child couldn’t see its peak.', 'the');
findWordOccurances('How do you plan on achieving that? How? How can you even think of that?', 'how');
findWordOccurances('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');