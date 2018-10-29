function order(input) {
    let result = (function () {
        let triangles = [];

        input
            .forEach(whp => {
                let currentTriangle = {
                    width: +whp[0],
                    height: +whp[1],
                    area: function () {
                        return this.width * this.height;
                    },
                    compareTo: function (other) {
                        return other.area() - this.area() || other.width - this.width;
                    }
                };

                triangles.push(currentTriangle);
            });

        return triangles
            .sort((t1, t2) => {
                return t2.area() - t1.area() || t2.width - t1.width;
            });
    })();

    return result;
}

console.log(order([[10,5], [3,20], [5,12]]));