function calculateCircleArea(r) {
    let area = Math.PI * +r * +r;

    console.log(area);
    console.log(Math.round(area * 100) / 100);
}

calculateCircleArea(5);