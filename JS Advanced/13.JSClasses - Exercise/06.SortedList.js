//Silly solution but judge wants property size...
class SortedList {
    constructor () {
        this.items = [];
        this.size = 0;
    }

    add (element) {
        this.items.push(element);
        this.size++;
        this.items.sort((a, b) => a - b);
    }

    remove (index) {
        if (index >= 0 && index < this.size) {
            this.items.splice(index, 1);
            this.size--;
        }
    }

    get (index) {
        if (index >= 0 && index < this.size) {
            return this.items[index];
        }
    }
}