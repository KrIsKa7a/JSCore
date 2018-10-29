function sortedList() {
    let sortedList = (function () {
        let obj = {
            list: [],
            add,
            remove,
            get,
            size: 0
        };

        return obj;

        function add(element) {
            this.list.push(element);
            this.size += 1;
            this.list.sort((a, b) => a - b);
        }

        function remove(index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
                this.size -= 1;
            }
        }

        function get(index) {
            if (index >= 0 && index < this.list.length) {
                return this.list[index];
            }
        }
    })();

    return sortedList;
}