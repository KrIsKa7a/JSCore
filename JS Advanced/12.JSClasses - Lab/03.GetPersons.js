function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            if (firstName) {
                this.firstName = firstName;
            }

            if (lastName) {
                this.lastName = lastName;
            }

            if (age) {
                this.age = age;
            }

            if (email) {
                this.email = email;
            }
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    return [
        new Person("Maria", "Petrova", 22, "mp@yahoo.com"),
        new Person("SoftUni"),
        new Person("Stephan", "Nikolov", 25),
        new Person("Peter", "Kolev", 24, "ptr@gmail.com")
    ];
}