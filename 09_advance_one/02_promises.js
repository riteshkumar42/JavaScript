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
    }, 2000);
}).then(function () {
    console.log('Promise 2');
})