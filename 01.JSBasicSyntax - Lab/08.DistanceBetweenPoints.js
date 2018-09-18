function calcDistanceBetweenTwoPoints(x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow((+x1 - +x2), 2) + Math.pow((+y1 - +y2), 2));

    console.log(distance);
}

calcDistanceBetweenTwoPoints(2, 4, 5, 0);