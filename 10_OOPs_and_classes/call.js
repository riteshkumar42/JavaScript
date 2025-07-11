function setUserName(username) {
    this.username = username;
    console.log('called');
} 

function createUser (username, email, password) {
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const user = new createUser('coffee', 'coffee@co.com', '233')
console.log(user);
