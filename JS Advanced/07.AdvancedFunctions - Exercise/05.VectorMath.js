(function vectorMath() {
    let solution = (function () {
        return {
            add: add,
            multiply: multiply,
            length: length,
            dot: dot,
            cross: cross
        };

        function add (vector1, vector2) {
            return [vector1[0] + vector2[0], vector1[1] + vector2[1]];
        }

        function multiply(vector1, scalar) {
            return [vector1[0] * scalar, vector1[1] * scalar];
        }

        function length(vector) {
            return Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2));
        }

        function dot(vector1, vector2) {
            return vector1[0] * vector2[0] + vector1[1] * vector2[1];
        }

        function cross(vector1, vector2) {
            return vector1[0] * vector2[1] - vector1[1] * vector2[0];
        }
    })();

    return solution;
})();