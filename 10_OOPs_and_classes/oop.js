const user = {
    username: "Ritesh",
    loginCount: 5,
    signedIn: true,
    getUserData: function () {
        console.log(`userName: ${this.username}`);
    }
}

// console.log(user.signedIn);
// console.log(user.getUserData());


function user2(username, isLoggedIn, language) {
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.language = language;
    
    return this
}

const userOne = new user2('Ritesh', true, "javaScript")
const userTwo = new user2('Nitesh', false, "java")
const userThree = new user2('Hitesh', false, "C++")

console.log(userOne);
console.log(userTwo);
console.log(userThree);
