const user = {
    username: "Ritesh",
    age: 21,

    welcomeMessage: function messages() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);

    }
}

// user.welcomeMessage()
// user.username ="Shivam"
// user.welcomeMessage()

// console.log(this);  //node output is {} empty object

function chai() {
    let username = "Ram"
    console.log(this.username);  // this -- use only objects
}
// chai()


//* +++++++++ arrow function ++++++++++

//normal arrow function

const addTwoNumber = (num1, num2) => {
    return (num1 - num2)
}
// console.log(addTwoNumber(2, 4))

const addTwo = (num1, num2) => (num1 + num2)   // Implicit return
// console.log(addTwor(2, 4))
