function extractUniqueWords(input) {
    let uniqueRegister = new Set();

    for (let row of input) {
        let words = row
            .match(/\w+/g)
            .map(w => w.toLowerCase());

        for (let word of words) {
            uniqueRegister.add(word);
        }
    }

    console.log(Array.from(uniqueRegister).join(", "));
}

extractUniqueWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.',
                    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
                    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
                    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
                    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
                    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
                    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']
);