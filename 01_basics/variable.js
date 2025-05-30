const accountId = 1234567880
let accountEmail = "hello@gmail.com";
var accountPassword = "hello@123";


// accountId = 988763580  //not allowed to change const variables 

accountEmail = "bank@google.com"
accountPassword = "85465125dh"

/*
Perfect not use to var keyword
because of issues in block scope and functional scope.

Only use let and const keywords..
 */



console.log(accountId)

console.table([accountId,accountEmail,accountPassword])