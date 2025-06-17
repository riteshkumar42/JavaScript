// use only let and const variable

// Global variable is one that is declared outside of any function and block.
// These variable are accessible from anywhere within the script, function and block.
let a = 10
const b = 20
var c = 30

// Scope(Block - Scoped) Variables
//* A scope variable(block - scoped variable) is declared inside a block(like inside {} of an if statement or a function).
// It can only be accessed within that block.
if (true) {
    let a = 100
    const b = 200
    var c = 300
}

// console.log(a);
// console.log(b);
// console.log(c);




// nested function

//parents function:-
function one() {
    const username = "Ramesh"

    // child function:- access parents function variable
    function two() {
        const work = "IT"
        console.log(username);
    }
    // console.log(work);
    two()
}
// one()


if (true) {
    const username = "Ritesh"

    if (username === "Ritesh") {
        const lastname = " Kumar"
        console.log(username + lastname);
    }

    // console.log(lastname); // this is error
    
}
// console.log(username); // this is error