function checkValidity(input) {
    let x1 = +input[0];
    let y1 = +input[1];
    let x2 = +input[2];
    let y2 = +input[3];

    let findDistanceBetweenTwoPointsAndCheckIfItIsValid = function (x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

        let isValid = Number.isInteger(distance);

        let output = `{${x1}, ${y1}} to {${x2}, ${y2}} is `;
        
        if (isValid) {
            output += `valid`;
        } else {
            output += `invalid`;
        }

        return output;
    };

    console.log(findDistanceBetweenTwoPointsAndCheckIfItIsValid(x1, y1, 0, 0));
    console.log(findDistanceBetweenTwoPointsAndCheckIfItIsValid(x2, y2, 0, 0));
    console.log(findDistanceBetweenTwoPointsAndCheckIfItIsValid(x1, y1, x2, y2));
}

checkValidity([3, 0, 0, 4]);
checkValidity([2, 1, 1, 1]);