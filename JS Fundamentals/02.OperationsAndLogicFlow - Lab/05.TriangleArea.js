function calcTriangleArea(a, b, c) {
    let sp = (+a + +b + +c) / 2;

    let area = Math.sqrt(sp * (sp - +a) * (sp - +b) * (sp - +c));

    console.log(area);
}

calcTriangleArea(2, 3.5, 4);