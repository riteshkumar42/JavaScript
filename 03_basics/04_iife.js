//* IIFE - Immediately Invoked Function Expression

//named iife
(function aurCode() {
    console.log(`DB CONNECTED`);
})();


((serverName) => {
    console.log(`DB CONNECTED TO ${serverName} SERVER`);
})('GOOGLE');