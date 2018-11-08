function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error("Abstract class cannot be instantiated directly");
            }

            this.weight = weight;
            this.melonSort = melonSort;
            this.element = "";
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this.element}` + "\n" +
                `Sort: ${this.melonSort}` + "\n" +
                `Element Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);

            this.element = "Water";
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);

            this.element = "Fire";
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);

            this.element = "Air";
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);

            this.element = "Earth";
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);

            this.element = "Water";
            this.elements = ["Fire", "Earth", "Air", "Water"];
        }

        morph() {
            let currentElement = this.elements.shift();

            this.element = currentElement;

            this.elements.push(currentElement);
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Airmelon,
        Earthmelon,
        Melolemonmelon
    };
}