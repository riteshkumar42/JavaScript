// switch case

const month = 1
switch (month) {
    case 1:
        console.log('january');
        break;
    case 2:
        console.log('february');
        break;
    case 3:
        console.log('march');
        break;
    case 4:
        console.log('april');
        break;
    default:
        console.log('kya hoga tera');
        break;
}




//*+++++++++++++++++++ truthy and falsy value +++++++++++++++++++

// falsy value
//*   false, 0, -0, null, undefined, BigInt 0n, "", NaN

// truthy value
//*  true, "0", 'false', " ", {}, [], function(){}

const userEmail = []

// if (userEmail) {
//     console.log('Got user email');
// } else {
//     console.log("Don't have user email");
// }

//* check array is empty or not
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

//* check object is empty or not
const obj = {}
// if (Object.keys(obj).length === 0) {
//     console.log("Object is empty");
// }



//*   Nullish Coalescing Operator(??) : null, undefined

let val;
// val = 20 ?? 30                // 20
// val = null ?? 25             // 25
// val = 100 ?? undefined       // 100
val = undefined ?? 200 ?? 100    // 100        

// val = null ?? undefined      // undefined
// val = undefined ?? null     // null

console.log(val);



// Terniary Operator
// condition ? true : false

const teaPrice = 50
teaPrice <= 100 ? console.log("buy it") : console.log("not buy");
