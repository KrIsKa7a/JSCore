function insideVolume(input) {
    for (let i = 0; i < input.length; i += 3) {
        let x = +input[i];
        let y = +input[i + 1];
        let z = +input[i + 2];

        let isInside = checkIfGivenPointIsInsideTheVolume(x, y, z);

        console.log(isInside ? "inside" : "outside");
    }

    function checkIfGivenPointIsInsideTheVolume(x, y, z) {
        if  (x >= 10 && x <= 50) {
            if (y >= 20 && y <= 80) {
                if (z >= 15 && z <= 50) {
                    return true;
                }
            }
        }

         return false;
    }
}

insideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
);