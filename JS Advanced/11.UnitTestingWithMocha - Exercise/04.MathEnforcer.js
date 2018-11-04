let assert = require('chai').assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe ("Test mathEnforcer object functionality", function () {
    describe ("Test addFive functionality", function () {
       it ("Should return undefined when passed a non-number parameter", function () {
          const testParameter = {};

          let actual = mathEnforcer.addFive(testParameter);

          assert.isUndefined(actual);
       });

        it ("Should return undefined when passed a non-number parameter", function () {
            const testParameter = "String";

            let actual = mathEnforcer.addFive(testParameter);

            assert.isUndefined(actual);
        });

       it ("Should return number + 5 when passed a positive number", function () {
           const testParameter = 5;
           const expected = 10;

           let actual = mathEnforcer.addFive(testParameter);

           assert.equal(actual, expected);
       });

       it ("Should return number + 5 when passed a negative number smaller than -5", function () {
           const testParameter = -10;
           const expected = -5;

           let actual = mathEnforcer.addFive(testParameter);

           assert.equal(actual, expected);
       });

        it ("Should return number + 5 when passed a negative number bigger than -5", function () {
            const testParameter = -3;
            const expected = 2;

            let actual = mathEnforcer.addFive(testParameter);

            assert.equal(actual, expected);
        });

        it ("Should return number + 5 when passed zero", function () {
            const testParameter = 0;
            const expected = 5;

            let actual = mathEnforcer.addFive(testParameter);

            assert.equal(actual, expected);
        });

        it ("Should return number + 5 when passed positive floating point number", function () {
            const testParameter = 5.5;
            const expected = 10.5;

            let actual = mathEnforcer.addFive(testParameter);

            assert.closeTo(actual, expected, 0.01);
        });

        it ("Should return number + 5 when passed negative floating point number", function () {
            const testParameter = -5.5;
            const expected = -0.5;

            let actual = mathEnforcer.addFive(testParameter);

            assert.closeTo(actual, expected, 0.01);
        });
    });

    describe ("Test subtractTen functionality", function () {
        it ("Should return undefined when passed a non-number parameter", function () {
            const testParameter = {};

            let actual = mathEnforcer.subtractTen(testParameter);

            assert.isUndefined(actual);
        });

        it ("Should return undefined when passed a non-number parameter", function () {
            const testParameter = "String";

            let actual = mathEnforcer.subtractTen(testParameter);

            assert.isUndefined(actual);
        });

        it ("Should return number - 10 when passed a positive number bigger than 10", function () {
            const testParameter = 15;
            const expected = 5;

            let actual = mathEnforcer.subtractTen(testParameter);

            assert.equal(actual, expected);
        });

        it ("Should return number - 10 when passed a positive number smaller than 10", function () {
            const testParameter = 8;
            const expected = -2;

            let actual = mathEnforcer.subtractTen(testParameter);

            assert.equal(actual, expected);
        });

        it ("Should return number - 10 when passed a negative number", function () {
            const testParameter = -10;
            const expected = -20;

            let actual = mathEnforcer.subtractTen(testParameter);

            assert.equal(actual, expected);
        });

        it ("Should return number - 10 when passed zero", function () {
            const testParameter = 0;
            const expected = -10;

            let actual = mathEnforcer.subtractTen(testParameter);

            assert.equal(actual, expected);
        });

        it ("Should return number - 10 when passed positive floating point number", function () {
            const testParameter = 15.5;
            const expected = 5.5;

            let actual = mathEnforcer.subtractTen(testParameter);

            assert.closeTo(actual, expected, 0.01);
        });

        it ("Should return number - 10 when passed negative floating point number", function () {
            const testParameter = -5.5;
            const expected = -15.5;

            let actual = mathEnforcer.subtractTen(testParameter);

            assert.closeTo(actual, expected, 0.01);
        });
    });

    describe ("Test sum functionality", function () {
       it ("Should return undefined if first parameter is non-number", function () {
            const testParameterA = "String";
            const testParameterB = 5;

            let actual = mathEnforcer.sum(testParameterA, testParameterB);

            assert.isUndefined(actual);
       });

        it ("Should return undefined if second parameter is non-number", function () {
            const testParameterA = 5;
            const testParameterB = "String";

            let actual = mathEnforcer.sum(testParameterA, testParameterB);

            assert.isUndefined(actual);
        });

        it ("Should return undefined if both numbers are non-number", function () {
            const testParameterA = "String";
            const testParameterB = "5";

            let actual = mathEnforcer.sum(testParameterA, testParameterB);

            assert.isUndefined(actual);
        });

        it ("Should return A + B when both A and B are positive numbers", function () {
            const testParameterA = 10;
            const testParameterB = 5;
            const expected = 15;

            let actual = mathEnforcer.sum(testParameterA, testParameterB);

            assert.equal(actual, expected);
        });

        it ("Should return A + B when both A and B are negative numbers", function () {
            const testParameterA = -10;
            const testParameterB = -5;
            const expected = -15;

            let actual = mathEnforcer.sum(testParameterA, testParameterB);

            assert.equal(actual, expected);
        });

        it ("Should return A + B when A is positive but B is negative number", function () {
            const testParameterA = 10;
            const testParameterB = -5;
            const expected = 5;

            let actual = mathEnforcer.sum(testParameterA, testParameterB);

            assert.equal(actual, expected);
        });

        it ("Should return A + B when A is negative but B is positive number", function () {
            const testParameterA = -10;
            const testParameterB = 5;
            const expected = -5;

            let actual = mathEnforcer.sum(testParameterA, testParameterB);

            assert.equal(actual, expected);
        });

        it ("Should return A + B when A and B are both positive floating point numbers", function () {
            const testParameterA = 5.5;
            const testParameterB = 5.5;
            const expected = 11;

            let actual = mathEnforcer.sum(testParameterA, testParameterB);

            assert.closeTo(actual, expected, 0.01);
        });

        it ("Should return A + B when A and B are both negative floating point numbers", function () {
            const testParameterA = -5.5;
            const testParameterB = -5.5;
            const expected = -11;

            let actual = mathEnforcer.sum(testParameterA, testParameterB);

            assert.closeTo(actual, expected, 0.01);
        });
        it ("Should return A + B when A is positive but B is negative floating point number", function () {
            const testParameterA = 5.5;
            const testParameterB = -4.5;
            const expected = 1;

            let actual = mathEnforcer.sum(testParameterA, testParameterB);

            assert.closeTo(actual, expected, 0.01);
        });

    });
});