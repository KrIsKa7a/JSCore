function validateEmail(email) {
    let emailPattern = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/g;

    console.log(emailPattern.test(email) ? "Valid" : "Invalid");
}

validateEmail('valid@email.bg');
validateEmail('invalid@emai1.bg');
validateEmail('valid@email.bg.co');