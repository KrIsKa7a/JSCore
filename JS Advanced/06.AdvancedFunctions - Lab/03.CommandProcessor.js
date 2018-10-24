function commandProcessor(input) {
    let process = (function() {
        let text = "";

        let processor = {
            append: function (toApeend) {
                text += toApeend;
            },
            removeStart: function (count) {
                text = text.substr(count);
            },
            removeEnd: function (count) {
                text = text.substring(0, text.length - count);
            },
            print: function () {
                console.log(text);
            },
        };

        return processor;
    })();

    input.forEach(row => {
        let tokens = row
            .split(/\s+/g);

        process[tokens[0]](tokens[1]);
    });
}

commandProcessor(
                ['append hello',
                'append again',
                'removeStart 3',
                'removeEnd 4',
                'print']
);