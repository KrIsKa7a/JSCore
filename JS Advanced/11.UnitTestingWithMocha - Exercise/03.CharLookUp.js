let assert = require("chai").assert;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe ("Function lookupChar tests", function () {
    describe ("Test passing incorrect parameters", function () {
       it ("Should return undefined when passing non-string as first parameter", function () {
            const testParameterA = {};
            const testParameterB = 10;
            const expected = undefined;

            let actual = lookupChar(testParameterA, testParameterB);

            assert.equal(actual, expected);
       });

       it ("Should return undefined when passing non-number as secondParameter", function () {
           const testParameterA = "RandomString";
           const testParameterB = {};
           const expected = undefined;

           let actual = lookupChar(testParameterA, testParameterB);

           assert.equal(actual, expected);
       });

       it ("Should return undefined when passing non-integer as secondParameter", function () {
           const testParameterA = "RandomString";
           const testParameterB = 5.5;
           const expected = undefined;

           let actual = lookupChar(testParameterA, testParameterB);

           assert.equal(actual, expected);
       });
    });

    describe ("Test passing incorrect index", function () {
       it ("Should return incorrect index message when passing negative index", function () {
           const testParameterA = "RandomString";
           const testParameterB = -1;
           const expected = "Incorrect index";

           let actual = lookupChar(testParameterA, testParameterB);

           assert.equal(actual, expected);
       });

       it ("Should return incorrect index message when passing index bigger than string length", function () {
           const testParameterA = "RandomString";
           const testParameterB = 50;
           const expected = "Incorrect index";

           let actual = lookupChar(testParameterA, testParameterB);

           assert.equal(actual, expected);
       });

        it ("Should return incorrect index message when passing index equal to string length", function () {
            const testParameterA = "RandomString";
            const testParameterB = testParameterA.length;
            const expected = "Incorrect index";

            let actual = lookupChar(testParameterA, testParameterB);

            assert.equal(actual, expected);
        });
    });

    describe ("Test if returning correct value when passed correct parameters", function () {
        it ("Should return 'R' for passed ['RandomString', 0]", function () {
            const testParameterA = "RandomString";
            const testParameterB = 0;
            const expected = "R";

            let actual = lookupChar(testParameterA, testParameterB);

            assert.equal(actual, expected);
        });

        it ("Should return 'g' for passed ['RandomString', 11]", function () {
            const testParameterA = "RandomString";
            const testParameterB = 11;
            const expected = "g";

            let actual = lookupChar(testParameterA, testParameterB);

            assert.equal(actual, expected);
        });
    });
});