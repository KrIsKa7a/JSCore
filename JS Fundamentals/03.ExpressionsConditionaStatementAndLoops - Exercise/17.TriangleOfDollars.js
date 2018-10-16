function drawATriangle(n) {
    for (let row = 1; row <= +n; row++) {
        console.log("$".repeat(row));
    }
}

drawATriangle(10);