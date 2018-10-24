function max(input) {
    let max = input.reduce((a, b) => Math.max(a, b));

    return max;
}

max([1, 44, 123, 33]);