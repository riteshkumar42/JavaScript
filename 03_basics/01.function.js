//  Function is a block of code designed to perform a specific task.
// A function can be declared using the function keyword, followed by the function name, a list of parameters inside parentheses, and the function body enclosed in curly braces. 

function sayMyName() {
    console.log("R")
    console.log("A")
    console.log("M")
}

// sayMyName()  // function call


// function addTwoNumber (num1, num2) {
//     console.log(num1 + num2);    
// }


function addTwoNumber(num1, num2) {
    let result = num1 + num2;
    return result
}
const result = addTwoNumber(3, 2)
// console.log("Result: ", result);


function loginUsername(username = "Player 01") { // default value "Player 01"
    //username === undefined
    if (!username) {
        console.log("Please enter your username...");
        return
    }
    return `Hello, ${username}`
}
const user = (loginUsername("Ritesh kumar"));  // function call
// console.log(user);



function calculateCartPrice(...val) {
    //(...) is rest parameter syntax to accept any number of arguments.
    return val
}
// console.log(calculateCartPrice(200, 290, 399, 3999));


//* +++++++++++++++++++++++++ Objects and a function +++++++++++++++++++++++++
//Object syntex
const person = {
    firstname: "Ritesh",
    lastname: "Kumar",
}
//function call objects
function handleObject(anyObjects) {
    console.log(`First name is '${anyObjects.firstname}' and last name is '${anyObjects.lastname}'`);
}

handleObject(person)


//* +++++++++++++++++++++++++ Array and a function +++++++++++++++++++++++++

const myArray = [299, 499, 1999, 39, 100]

function returnArrayValue(anyArray) {
    return anyArray
}
console.log(returnArrayValue(myArray));