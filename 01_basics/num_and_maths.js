const balance = 1000;
console.log(balance);

// Math operations in JavaScript is object-based

console.log(Math.PI); // 3.141592653589793

console.log(Math.abs(-5)); // 5 - to get absolute value -ve value to +ve value
console.log(Math.ceil(4.2)); // 5 - rounds up to the nearest integer
console.log(Math.floor(4.8)); // 4 - rounds down to the nearest integer 
console.log(Math.round(4.5)); // 5 - rounds to the nearest integer


console.log(Math.random()); // 0.123456789 - generates a random number between 0 and 1
console.log(Math.random() * 10 + 1); // 5.123456789 - generates a random number between 1 and 10
console.log(Math.floor(Math.random() * 10 + 1)); // 5 - generates a random integer between 1 and 10
// +1 for avoid 0 output value

const min = 20;
const max = 35;

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // +min  => value min(20) se up ka value aaye and +1 to avoid 0 value