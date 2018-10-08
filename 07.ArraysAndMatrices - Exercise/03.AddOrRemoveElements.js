function addOrRemoveElements(operations) {
    let arr = [];

    for (let i = 0; i < operations.length; i++) {
        let command = operations[i];

        if (command === 'add') {
            arr.push(i + 1);
        } else if (command === 'remove') {
            arr.pop();
        }
    }

    if (arr.length === 0) {
        console.log('Empty');
    } else {
        console.log(arr.join('\n'));
    }
}

addOrRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);