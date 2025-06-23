const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const number = myNumbers.map( (num) => num * 10)


//* Chaining
/* Method chaining is a programming technique where you call multiple methods on the same object in a single line, one after another. Each method returns an object, allowing the next method to be called directly. */

const number = myNumbers.map((num) => num + 5).map((num) => num * 10).filter((num) => num >= 110)


console.log(number);
