// Array
// JavaScript array can resizable and contain a mix of differents data type.

const myArr = [1, 3, 4, 5, 6];
// console.log(myArr);
// console.log(myArr[1]);


//* +=+=+ Array methods +=+=+

myArr.push(10)
/* New element to add to the array. 
Appends new elements to the end of an array, and returns the new length of the array. */
// console.log(myArr);

myArr.pop() // Remove the last element of the array.
// console.log(myArr);

myArr.unshift(84) // Elements to insert at the start of the array.

myArr.shift() // Remove the first element form the array.
// console.log(myArr);


const myArr2 = ["ironman", "hulk", "thor", "spiderman"]

// console.log(myArr2.includes("hulk")); 
//* element to search, return true/false
// console.log(myArr2.indexOf("thor"));
//* The value to locate in the array.

const newArr = [0, 1, 2, 3, 4, 5]
console.log("A ", newArr)

const newArr1 = newArr.slice(1, 3)

console.log(newArr1)
console.log("B ", newArr)

const newArr2 = newArr.splice(1, 3)
console.log("C ", newArr)
console.log(newArr2);


