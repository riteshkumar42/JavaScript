//*  Inheritance :- Classes support inheritance using the extends keyword, allowing a class to inherit properties and methods from another class.


class student {
    constructor(username, idNumber) {
        this.username = username;
        this.idNumber = idNumber;
    }

    logMe() {
        console.log(`User is: ${this.username} and id number is: ${this.idNumber}`);
    }
}

class teacher extends student {
    constructor(username, idNumber, email, phone) {
        super(username, idNumber);
        this.email = email;
        this.phone = phone;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

// Creating instances
const studentDetails = new student("Pradeep", "232323")
const teacherDetails = new teacher("Hitesh sir", "989898", "hitesh@example.com", "098-76543")

studentDetails.logMe()
teacherDetails.addCourse()

// studentDetails.addCourse()   //!...not access to teacher

teacherDetails.logMe()

console.log(studentDetails instanceof teacher);  //false
console.log(teacherDetails instanceof student); //true



//?===>>===>>===>>===>>===>>===>>===>>===>>===>>===>>===>>===>>

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating instances of the Person class
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

// Calling methods on instances
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.