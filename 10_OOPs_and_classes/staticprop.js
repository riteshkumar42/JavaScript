//* static method

class User {
    // Constructor runs when a new object of the class is created
    constructor(username) {
        this.username = username;
    }

    // Instance method: can only be called by an object (instance) of the class
    logMe() {
        console.log(`Username is: ${this.username}`);
    }

    // Static method: belongs to the class itself, not to any object
    // It cannot access instance properties (like this.username)
    static createId(username) {
        // Return a string combining the username and a random number from 1 to 11
        return `${username}#${Math.round(Math.random() * 10 + 1)}`
    }
}

let person = new User("Ritesh")

person.logMe()

//! console.log(person.createId());  // ❎
// Call the static method createId using the class name, and pass in the username
console.log(`Unique ID is: ${User.createId(person.username) }`); // ✅



//?===>====>>======>=======>=====>=======>======>=====>


class User5 {
    constructor(name) {
        this.name = name; // instance property
    }

    // Regular (instance) method: works on a specific user
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }

    // Static method: belongs to the class, not to any one user
    static greetEveryone() {
        console.log("Hello everyone! 👋");
    }
}

// Create a user instance
const user1 = new User5("Ritesh");

// Call instance method on object
user1.sayHello();      // Output: Hello, my name is Ritesh

// Call static method on class
User5.greetEveryone();  // Output: Hello everyone! 👋

// ❌ Error: You can't call static method from an instance
// user1.greetEveryone();  // This will throw an error
