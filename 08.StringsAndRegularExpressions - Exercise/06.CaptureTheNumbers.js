function captureTheNumbers(input) {
    let pattern = /\d+/g;

    let numbers = [];

    for (let row of input) {
        let matches = row.match(pattern);

        if(matches) {
            matches
                .forEach(m => numbers.push(m));
        }
    }

    console.log(numbers.join(' '));
}

captureTheNumbers(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']
);

captureTheNumbers(['123a456',
    '789b987',
    '654c321',
    '0']
);

captureTheNumbers(['Let’s go11!!!11!',
    'Okey!1!']
);