console.log('run');
//* A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error. 
//* Creates a new Promise.

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('async task is compelete');
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log('promise consumed');
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve()
    }, 1000);
}).then(function () {
    console.log('Promise 2');
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Ritesh", email: "ritesh@example.com" })
    }, 1000)
})

promiseThree.then(function (data) {
    console.log(data);
})



const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Ritesh", password: "12345" })
        } else {
            reject('ERRROR !!!, Something went wrong')

        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (err) {
    console.log(err);
}).finally(() => {
    console.log('The promise is either resolved or rejected');

})



//? promiseFive.then().catch().finally()
//? useing async and await

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "JavaScript", password: "12345" })
        } else {
            reject('ERRROR!, JS')
        }
    }, 1000)
})


async function consumPromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumPromiseFive()




//* data fetch useing async and await
// async function getAlluserData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const userData = await response.json()
//         console.log(userData);
//     } catch (error) {
//         console.log("ERROR!", error);
//     }
// }

// getAlluserData()

//* data fetch useing .then or .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((userData) => {
    return userData.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))