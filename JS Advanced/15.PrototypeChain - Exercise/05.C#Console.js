class Console {
    static get placeholder() {
        return /{\d+}/g;
    }

    static writeLine() {
        let message = arguments[0];
        
        if (arguments.length === 1) {
            if (typeof (message) === 'object') {
                message = JSON.stringify(message);
                return message;
            }
            else if (typeof(message) === 'string') {
                return message;
            }
        }
        else {
            if (typeof (message) !== 'string') {
                throw new TypeError("No string format given!");
            }
            else {
                let tokens = message.match(this.placeholder).sort(function (a, b) {
                    a = Number(a.substring(1, a.length - 1));
                    b = Number(b.substring(1, b.length - 1));
                    return a - b;
                });

                if (tokens.length !== (arguments.length - 1)) {
                    throw new RangeError("Incorrect amount of parameters given!");
                }
                else {
                    for (let i = 0; i < tokens.length; i++) {
                        let number = Number(tokens[i].substring(1, tokens[i].length - 1));
                        if (number !== i) {
                            throw new RangeError("Incorrect placeholders given!");
                        }
                        else {
                            message = message.replace(tokens[i], arguments[i + 1])
                        }
                    }
                    return message;
                }
            }
        }
    }
}

let assert = require('chai').assert;

describe("Test C# Console functionality", function () {
    describe("Test passing one argument", function () {
        it("Should return exactly the same string when string argument passed", function () {
            const testString = "Random line";
            const expected = "Random line";
            
            const actual = Console.writeLine(testString);
            
            assert.equal(actual, expected);
        });

        it("Should return string object representation when passed an object", function () {
            const testParameter = {
                parameter1: "parameter1",
                parameter2: "parameter2",
                parameter3: "parameter3"
            };
            const expected = JSON.stringify(testParameter);

            const actual = Console.writeLine(testParameter);

            assert.equal(actual, expected);
        });

        it("Should return undefined when passed a number", function () {
            const testParameter = 10;

            const actual = Console.writeLine(testParameter);

            assert.isUndefined(actual);
        });
    });

    describe("Test passing more than one argument (using placeholders)", function () {
        it("Should throw a TypeError when first argument passed is not a string", function () {
            const testParameter = {
                param: "param",
                test: "error",
                object: "object",
                error: "error"
            };

            assert.throws(function () {
                Console.writeLine(testParameter, "something", "another one", "throw an error");
            }, TypeError)
        });

        it("Should throw TypeError when all arguments passed are numbers", function () {
           assert.throws(function () {
               Console.writeLine(1, 2, 3);
           }, TypeError);
        });

        it("Should throw a TypeError when no parameters are passed", function () {
            assert.throws(function () {
                Console.writeLine();
            }, TypeError);
        });

        it("Should throw a RangeError when passed less parameters responding to placeholders", function () {
            const testString = "I am {0} and I am {1} years old student from {2}";

            assert.throws(function () {
                Console.writeLine(testString, "Christian", 18);
            }, RangeError)
        });

        it("Should throw a RangeError when passed more parameters responding to placeholders", function () {
            const testString = "I am {0} and I am {1} years old student from {2}";

            assert.throws(function () {
                Console.writeLine(testString, "Christian", 18, "Sofia", "Something");
            }, RangeError)
        });

        it("Should throw a RangeError when string contains placeholder with bigger number than parameters length", function () {
            const testString = "I am {13} and I am {1} years old student from {2}";

            assert.throws(function () {
                Console.writeLine(testString, "Christian", 18, "Sofia");
            }, RangeError)
        });

        it("Should throw RangeError if placeholder changed", function () {
           const testString = "I am {0} and I am {0} years old";

           assert.throws(function () {
               Console.writeLine(testString, "Christian", "18");
           }, RangeError);
        });

        it("Should replace all placeholders when passed correct string and number of parameters", function () {
            const testString = "I am {0} and I am {1} years old student from {2}";
            const expected = "I am Christian and I am 18 years old student from Sofia";

            const actual = Console.writeLine(testString, "Christian", 18, "Sofia");

            assert.equal(actual, expected);
        });

        it("Should replace all placeholders when passed correct parameters even if they are in incorrect order", function () {
            const testString = "I am {1} and I am {0} years old student from {2}.";
            const expected = "I am Christian and I am 18 years old student from Sofia.";

            const actual = Console.writeLine(testString, 18, "Christian", "Sofia");

            assert.equal(actual, expected);
        });

        it("should recognize the placeholder numbers well", function () {
            const testString = "That should not {10}";

            assert.throws(function () {
                Console.writeLine(testString, "work");
            }, RangeError);
        });
    });
});

