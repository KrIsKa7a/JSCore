function listProccessor(input) {
    let proccessor = (function () {
        let data = [];

        input
            .forEach(cmd => {
                let tokens = cmd
                    .split(" ");
                let command = tokens[0];
                tokens.shift();

                let commands = {
                    add,
                    remove,
                    print
                };

                commands[command].apply(this, tokens);

                function add(element) {
                  data.push(element);
                }

                function remove(element) {
                    data = data
                        .filter(el => el !== element);
                }

                function print() {
                    console.log(data.join());
                }
            });
    })();
}

listProccessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);