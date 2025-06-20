//*  if

const number = 30;
if (number >= 50) {
    // console.log('number is greater then 50');
} else {
    // console.log('number is less then 50');
}

score = 200;
if (score > 100) {
    const power = "fly";
    // console.log(`Power is ${power}`);
}
// console.log(`Power are : ${power}ing`);

// const balance = 299
// if (balance < 500) {
//     console.log('Less then 500');
// } else if (balance < 1000) {
//     console.log('Less then 1000');
// } else {
//     console.log('Less then 1300');
// }

const userLoggedIn = true;
const debitCard = true;
let userLoggedInWithGoogle = true
let userLoggedInWithFacebook = false


if (userLoggedInWithGoogle || userLoggedInWithFacebook) {
    console.log('login sucessefull');
} else if (userLoggedIn == false) {
    console.log('login failed');
}


if (userLoggedIn && debitCard) {
    console.log("Allow to buy nothing");
} else if (userLoggedIn == false) {
    console.log("Pls login...");
} else {
    console.log("Please add debit card details");
}

