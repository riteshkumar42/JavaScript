// Classes, introduced in ES6 (ECMAScript 2015), provide a more structured and object-oriented way to create objects and manage their behavior.

class User {
    //* constructor() method:- A special method within a class that is automatically called when a new instance of the class is created.
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    //  method create
    encryptPassword() {
        return (`${this.password}asd`)
    }

    changeUsername() {
        return (`${this.username.toUpperCase()}`)
    }
}

const Player89 = new User("Pradeep", "pradeep@deep.com", "7979")

// calling methods
console.log(Player89.encryptPassword());
console.log(Player89.changeUsername());
