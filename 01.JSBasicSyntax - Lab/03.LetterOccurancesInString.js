function letterOccurancesInString(word, letter){
    let occurances = 0;

    for(let i = 0; i < word.length; i++){
        if(word[i] === letter){
            occurances++;
        }
    }

    console.log(occurances);
}

letterOccurancesInString('hello', 'l');