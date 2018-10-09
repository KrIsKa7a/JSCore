function splitExpression(input) {
    let splitted = input
        .split(/[\s(),;.]+/g)
        .filter(el => el !== '');

    console.log(splitted.join('\n'));
}

splitExpression('let sum = 4 * 4,b = "wow";');
splitExpression('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');