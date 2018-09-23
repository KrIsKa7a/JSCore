function calcDistanceBetweenTwoObject(input) {
    let v1 = +input[0];
    let v2 = +input[1];
    let t = +input[2];

    let ts = t / 3600;
    let s1 = v1 * ts;
    let s2 = v2 * ts;

    let dskm = Math.abs(s1 - s2);
    let dsm = dskm * 1000;

    console.log(dsm);
}

calcDistanceBetweenTwoObject([0, 60, 3600]);