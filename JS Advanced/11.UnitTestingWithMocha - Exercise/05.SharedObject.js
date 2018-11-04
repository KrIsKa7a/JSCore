let assert = require('chai').assert;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let 05 = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe ("Test shared object functionality", function () {
    before(() => global.$ = $);
    describe ("Test initialization of the object", function () {
       it ("Name should be null at initialization", function () {
          let name = 05.name;

          assert.isNull(name);
       });

       it ("Income should be null at initialization", function () {
          let income = 05.income;

          assert.isNull(income);
       });
    });

    describe ("Test changeName functionality", function () {
       it ("Should return the new name when calling function at the first", function () {
          05.changeName("Pesho");

          let objectName = 05.name;
          let documentName = $("#name").val();
          let expected = "Pesho";

          assert.equal(objectName, expected);
          assert.equal(documentName, expected);
       });

       it ("Should return the new name when calling function more than once", function () {
          05.changeName("Pesho");
          05.changeName("Gosho");

           let objectName = 05.name;
           let documentName = $("#name").val();
           let expected = "Gosho";

           assert.equal(objectName, expected);
           assert.equal(documentName, expected);
       });

       it ("Should return number when the name is set to number", function () {
           05.changeName(15);

           let objectName = 05.name;
           let documentName = $("#name").val();
           let expected = 15;

           assert.equal(objectName, expected);
           assert.equal(documentName, expected);
       });

       it ("Should not change the old name when new name is empty string", function () {
           05.changeName("Pesho");
           05.changeName("");

           let objectName = 05.name;
           let documentName = $("#name").val();
           let expected = "Pesho";

           assert.equal(objectName, expected);
           assert.equal(documentName, expected);
       });
    });

    describe ("Test changeIncome functionality", function () {
        it ("Should save the value when it's passed correct value at calling function for first", function () {
            05.changeIncome(15);

            let objectIncome = 05.income;
            let documentIncome = $("#income").val();
            let expected = 15;

            assert.equal(objectIncome, expected);
            assert.equal(documentIncome, expected.toString());
        });

        it ("Should save the new value when function is called more than once", function () {
            05.changeIncome(15);
            05.changeIncome(20);

            let objectIncome = 05.income;
            let documentIncome = $("#income").val();
            let expected = 20;

            assert.equal(objectIncome, expected);
            assert.equal(documentIncome, expected.toString());
        });

        it ("Should keep the old value when function called with non-number income", function () {
            05.changeIncome(15);
            05.changeIncome("20");

            let objectIncome = 05.income;
            let documentIncome = $("#income").val();
            let expected = 15;

            assert.equal(objectIncome, expected);
            assert.equal(documentIncome, expected.toString());
        });

        it ("Should keep the old value when function called with negative income", function () {
            05.changeIncome(15);
            05.changeIncome(-15);

            let objectIncome = 05.income;
            let documentIncome = $("#income").val();
            let expected = 15;

            assert.equal(objectIncome, expected);
            assert.equal(documentIncome, expected.toString());
        });

        it ("Should keep the old value when function called with zero income", function () {
            05.changeIncome(15);
            05.changeIncome(0);

            let objectIncome = 05.income;
            let documentIncome = $("#income").val();
            let expected = 15;

            assert.equal(objectIncome, expected);
            assert.equal(documentIncome, expected.toString());
        });
    });

    describe ("Test updateName functionality", function () {
       it ("Should update name when a valid name is passed", function () {
           let expected = "Gosho";

            05.changeName("Pesho");
            $("#name").val("Gosho");
            05.updateName();

           let objectName = 05.name;
           let documentName = $("#name").val();

            assert.equal(objectName, expected);
            assert.equal(documentName, expected);
       });

       it ("Should not update name when passed name is empty string", function () {
           let expected = "Pesho";
           05.changeName("Pesho");
           $("#name").val("");

           05.updateName();

           let objectName = 05.name;
           let documentName = $("#name").val();

           assert.equal(objectName, expected);
           assert.equal(documentName, "");
       });
    });

    describe ("Test update income functionality", function () {
        it ("Should return previous value if value is NaN", function () {
            05.changeIncome(15);
            $("#income").val("abc");
            05.updateIncome();

            let objectIncome = 05.income;
            let documentIncome = $("#income").val();

            assert.equal(objectIncome, 15);
            assert.equal(documentIncome, "abc");
        });

        it("should return previous value if value is floating point number", function () {
            05.changeIncome(15);
            $("#income").val("3.6");
            05.updateIncome();

            let objectIncome = 05.income;
            let documentIncome = $("#income").val();

            assert.equal(objectIncome, 15);
            assert.equal(documentIncome, "3.6");
        });

        it("should return previous value if value is negative number", function () {
            05.changeIncome(15);
            $("#income").val("-10");
            05.updateIncome();

            let objectIncome = 05.income;
            let documentIncome = $("#income").val();

            assert.equal(objectIncome, 15);
            assert.equal(documentIncome, "-10");
        });

        it("should return previous value if value is 0", function () {
            05.changeIncome(15);
            $("#income").val("0");
            05.updateIncome();

            let objectIncome = 05.income;
            let documentIncome = $("#income").val();

            assert.equal(objectIncome, 15);
            assert.equal(documentIncome, "0");
        });

        it("should return correct value id value is positive integer", function () {
            05.changeIncome(15);
            $("#income").val("20");
            05.updateIncome();

            let objectIncome = 05.income;
            let documentIncome = $("#income").val();

            assert.equal(objectIncome, 20);
            assert.equal(documentIncome, "20");
        })
    });
});