function printNumbers1ToN(n) {
    let output = '';

    for(let i = 1; i <= +n; i++){
        output += i;
    }

    console.log(output)
}

printNumbers1ToN('11');