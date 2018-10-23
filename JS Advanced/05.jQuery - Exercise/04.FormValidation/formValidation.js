function validate() {
    let isCompany = false;
    let isPassWordValid = false;
    let isUsernameValid = false;
    let isEmailValid = false;
    let isConfirmPassWordValid = false;
    let doesPasswordsMatch = false;

    let submit = $("#submit");

    let checkbox = $("#company");
    checkbox.on("change", function () {
        let companyInfo = $("#companyInfo");
       if(this.checked) {
           companyInfo
               .css("display", "");
           isCompany = true;
       } else {
           companyInfo
               .css("display", "none");
       }
    });

    submit.on("click", function (ev) {
        ev.preventDefault();
        ev.stopPropagation();

        let usernameInput = $("#username");
        let username = usernameInput.val();
        let usernamePattern = /\b[A-Za-z0-9]{3,20}\b/;

        let emailInput = $("#email");
        let email = emailInput.val();
        let emailPattern = /(.)*@(.)*\.(.)*/;

        let passwordsPattern = /\b\w{5,15}\b/;
        let passwordInput = $("#password");
        let password = passwordInput.val();
        let isPasswordValid = passwordsPattern.test(password);
        let confirmPasswordInput = $("#confirm-password");
        let confirmPassword = confirmPasswordInput.val();
        let isConfirmPasswordValid = passwordsPattern.test(confirmPassword);


        let checkbox = $("#company");

        if(!usernamePattern.test(username)) {
            usernameInput
                .css("border-color", "red");
        } else {
            usernameInput
                .css("border-color", "");
            isUsernameValid = true;
        }

        if (!emailPattern.test(email)) {
            emailInput
                .css("border-color", "red");
        } else {
            emailInput
                .css("border-color", "");
            isEmailValid = true;
        }

        if (!isPasswordValid) {
            passwordInput
                .css("border-color", "red");
        } else {
            passwordInput
                .css("border-color", "");
            isPassWordValid = true;
        }

        if (!isConfirmPasswordValid) {
            confirmPasswordInput
                .css("border-color", "red");
        } else {
            confirmPasswordInput
                .css("border-color", "");
            isConfirmPassWordValid = true;
        }

        if (password !== confirmPassword) {
            passwordInput
                .css("border-color", "red");
            confirmPasswordInput
                .css("border-color", "red");
        } else {
            if (isPassWordValid && isConfirmPassWordValid) {
                passwordInput
                    .css("border-color", "");
                confirmPasswordInput
                    .css("border-color", "");
                doesPasswordsMatch = true;
            }
        }

        let validDiv = $("#valid");

        if (!isCompany) {
            if (isUsernameValid && isEmailValid && isPassWordValid && isConfirmPassWordValid && doesPasswordsMatch) {
                validDiv
                    .css("display", "");
            } else {
                validDiv
                    .css("display", "none");
            }
        } else {
            let companyNumberInput = $("#companyNumber");
            let companyNumber = +companyNumberInput.val();

            let isCompanyNumberValid = companyNumber > 1000 && companyNumber <= 9999;

            if (!isCompanyNumberValid) {
                companyNumberInput
                    .css("border-color", "red");
            } else {
                companyNumberInput
                    .css("border-color", "");
            }

            if (isUsernameValid && isEmailValid && isPassWordValid && isConfirmPassWordValid && doesPasswordsMatch &&
                isCompanyNumberValid) {
                validDiv
                    .css("display", "");
            } else {
                validDiv
                    .css("display", "none");
            }
        }
    });
}
