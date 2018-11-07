function createClassHierarchy() {
    //Abstract class
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new Error("Class Figure is abstract and cannot be instancietied.");
            }

            if (this.constructor === Figure) {
                throw new Error("Class Figure is abstract and cannot be instancietied.");
            }

            this.area = 0;
        }

        toString() {
            let type = this.constructor.name;

            return type;
        }
    }

    class Circle extends Figure{
        constructor(radius) {
            super();

            this.radius = radius;
            this.area = Math.PI * this.radius * this.radius;
        }

        toString() {
            return `${super.toString()} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();

            this.width = width;
            this.height = height;
            this.area = this.width * this.height;
        }

        toString() {
            return `${super.toString()} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
      Figure,
      Circle,
      Rectangle
    };
}

createClassHierarchy();

