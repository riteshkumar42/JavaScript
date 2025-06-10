// Dates
// Date in JavaScript is Objects

let todayDate = new Date()

// console.log(todayDate) // 2025-06-07T17:01:48.578Z
// console.log(todayDate.toString()) // Sat Jun 07 2025 22:31:48 GMT+0530 (India Standard Time)
// console.log(todayDate.toDateString()) //  Sat Jun 07 2025
// console.log(todayDate.toLocaleDateString()) // 6/7/2025


let myCreatedDate = new Date(2027, 0, 4)
// In javascript Months starts from 0.
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2 = new Date(2026, 2, 6, 8, 45, 52) // to pass an own date and time.
let myCreatedDate2 = new Date("02-15-2023")  // Months - Dates - Years
// console.log(myCreatedDate2.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// console.log(Math.floor(Date.now() / 1000)) // Divided by 1000 => seconds

let newDate = new Date();
// console.log(newDate.getTime());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getDate());


newDate.toLocaleString("default", {
    day:"2-digit"
})

console.log(newDate);
