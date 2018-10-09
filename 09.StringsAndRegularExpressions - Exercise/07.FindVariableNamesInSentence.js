function findVariableNames(input) {
    let variableNames = [];

    let pattern = /\b\_([A-Za-z0-9]+)\b/g;

    let match;

    while(match = pattern.exec(input)) {
        variableNames.push(match[1]);
    }

    console.log(variableNames.join(','));
}

findVariableNames('The _id and _age variables are both integers.');
findVariableNames('Calculate the _area of the _perfectRectangle object.');
findVariableNames('__invalidVariable _evenMoreInvalidVariable_ _validVariable');