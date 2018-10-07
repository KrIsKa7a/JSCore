function extractUsernames(input) {
    let usernames = [];

    for (let email of input) {
        let emailSplitted = email
            .split('@')
            .filter(el => el !== '');

        let before = emailSplitted[0];
        let after = emailSplitted[1]
            .split('.')
            .filter(el => el !== '')
            .map(el => el[0])
            .join('');

        let username = `${before}.${after}`;

        usernames.push(username);
    }

    console.log(usernames.join(', '));
}

extractUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);