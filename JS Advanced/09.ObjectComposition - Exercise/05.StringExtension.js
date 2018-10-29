(function extendString() {
    String.prototype.ensureStart = function (str) {
        if (!this.valueOf().startsWith(str)) {
            return str + this.valueOf();
        } else {
            return this.valueOf();
        }
    };

    String.prototype.ensureEnd = function (str) {
        if(!this.valueOf().endsWith(str)) {
            return this.valueOf() + str;
        } else {
            return this.valueOf();
        }
    };

    String.prototype.isEmpty = function () {
        return this.valueOf() === "";
    };

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return ".".repeat(n);
        }

        if (this.length <= n) {
            return this.valueOf();
        } else if (this.length > n) {
            if (this.valueOf()[n - 1] === " " || this.valueOf()[n] === " ") {
                let part = this.valueOf().substring(0, n - 1);
                let indexOfLastSpace = part.lastIndexOf(" ");
                return part.substring(0, indexOfLastSpace) + "...";
            }

            let words = this
                .valueOf()
                .split(" ");

            if (words.length > 1) {
                let wordLenght = this.valueOf().length ;

                while (wordLenght > n) {
                    let removedWord = words.pop();
                    wordLenght -= removedWord.length + 1;
                }

                return words.join(" ") + "...";
            } else {
                return this.valueOf().substring(0, n - 3) + "...";
            }
        }
    };

    String.format = function (string) {
        let result = string;
        let params = [];

        for (let i = 1; i < arguments.length; i++) {
            params.push(arguments[i]);
        }

        let placeholderPattern = /({\d+})/g;

        let match;

        while (match = placeholderPattern.exec(string)) {
            if (params.length > 0) {
                result = result.replace(match[1], params[0]);
                params.shift();
            }
        }

        return result;
    };
})();