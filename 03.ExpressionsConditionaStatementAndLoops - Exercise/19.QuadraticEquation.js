function solveQuadraticEquation(a, b, c) {
    //Let's make it harder and make it solve the equation even if it is not quadratic :)
    if (a < 0) {
        //We reverse them or we multiply the whole equation by -1
        a *= -1;
        b *= -1;
        c *= -1;
    }

    if (a === 0) {
        //We reverse 'c' sing because we move it on the other side of equation
        c *= -1;

        let x = c / b;

        console.log(x);
    } else {
        //The classic case where we have quadratic equation
        let D = Math.pow(b, 2) - (4 * a * c);

        if (D > 0) {
            let x1 = ((b * -1) + Math.sqrt(D)) / (2 * a);
            let x2 = ((b * -1) - Math.sqrt(D)) / (2 * a);

            console.log(Math.min(x1, x2));
            console.log(Math.max(x1, x2));
        } else if (D === 0) {
            let x = (b * -1) / (2 * a);

            console.log(x);
        } else {
            console.log("No");
        }
    }
}

solveQuadraticEquation(6, 11, -35);
solveQuadraticEquation(1, -12, 36);
solveQuadraticEquation(5, 2, 1);
solveQuadraticEquation(0, 6, -12);