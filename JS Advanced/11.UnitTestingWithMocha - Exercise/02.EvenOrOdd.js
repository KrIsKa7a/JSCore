let assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe ("isOddOrEven function tests", function () {
    describe ("Test passing incorrect parameter type", function () {
       it ("Should return undefined for passing object", function () {
          let expected = undefined;
          let result = isOddOrEven({});

          assert.equal(result, expected);
       });

       it ("Should return undefined for passing number", function () {
           let expected = undefined;
           let result = isOddOrEven(5);

           assert.equal(result, expected);
       });
    });

    describe ("Test if returning correct value with correct parameters", function () {
        it ("Should return even when word with even length passed", function () {
            const testWord = "word";
            const expected = "even";

            let result = isOddOrEven(testWord);

            assert.equal(result, expected);
        });

        it ("Should return odd when word with odd length passed", function () {
            const testWord = "something";
            const expected = "odd";

            let result = isOddOrEven(testWord);

            assert.equal(result, expected);
        });
    });
});
