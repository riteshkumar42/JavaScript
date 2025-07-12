class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        // console.log(password);
        
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(val) {
        this._email = val;
    }

    get password() {
        return `!${this._password}#Ok`;
    }
    set password(val) {
        this._password = val;
    }
}

let person2 = new User("p@person.com", "asd@12");

console.log(person2.email);
console.log(person2.password);
