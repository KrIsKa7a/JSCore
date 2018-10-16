function findDistanceBetweenTwoPoints(input) {
    let x1 = +input[0];
    let y1 = +input[1];
    let z1 = +input[2];
    let x2 = +input[3];
    let y2 = +input[4];
    let z2 = +input[5];

    //I don't really know what's going in with that math xD
    let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));

    console.log(d);
}

findDistanceBetweenTwoPoints([1, 1, 0, 5, 4, 0]);