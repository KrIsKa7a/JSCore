class Circle {
    constructor(radius) {
        this.radius = radius;
        this._diameter = 0;
    }

    get diameter () {
        return this.radius * 2;
    }

    set diameter(val) {
        this.radius = val / 2;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }
}