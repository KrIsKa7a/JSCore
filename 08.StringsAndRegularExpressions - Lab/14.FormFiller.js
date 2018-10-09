function formFiller(username, email, phoneNumber, formText) {
    let usernamePattern = /\<\![A-Za-z]+\!\>/;
    let emailPattern = /\<\@[A-Za-z]+\@\>/;
    let phonePattern = /\<\+[A-Za-z]+\+\>/;

    for (let row of formText) {

        row = replaceAllThatMatchGivenPattern(row, usernamePattern, username);
        row = replaceAllThatMatchGivenPattern(row, emailPattern, email);
        row = replaceAllThatMatchGivenPattern(row, phonePattern, phoneNumber);

        console.log(row);
    }

    function replaceAllThatMatchGivenPattern(row, pattern, toReplace) {
        while (row.match(pattern)) {
            row = row.replace(pattern, toReplace)
        }

         return row;
    }
}

formFiller('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);
