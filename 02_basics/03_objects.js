//Objects
// Object.freeze = Prevents the modification
// Objects literals-

const mySym = Symbol("Value1")

const JsUser = {
    name: "Shivam",
    "full name": "Shivam Kumar",
    [mySym]: "my unique value",
    age: 19,
    isLoggedIn: false,
    email: "shivam@gmail.com",
    workingdays: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],

}
// console.log(JsUser);

// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(JsUser.age)


JsUser.age = 23 // overwrite value to change existing value
console.log("change_age =",JsUser.age)

// Object.freeze(JsUser) // Prevents the modification of existing valuse
JsUser.name = "Ramesh Kumar"
console.log("change_name =",JsUser.name);


JsUser.greeting = function() {
    console.log("Hello, Welcome user");    
}

JsUser.greetingTwo = function() {
    console.log(`Hello, Welcome ${this.name}`);    
}
// JsUser.greeting() // function call
console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

JsUser.greetingTwo()