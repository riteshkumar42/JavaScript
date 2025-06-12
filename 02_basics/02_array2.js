const marvel_heros = ["ironman", "thor", "spiderman", "hulk"]
const dc_heros = ["batman", "superman", "aquaman", "flash"]
const indian_heros = ["shaktiman", "krrish"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros).concat(indian_heros) //Combines two or more arrays. This method returns a new array without modifying any existing arrays
// console.log(allHeros);

const newHeros = [...marvel_heros, ...dc_heros, ...indian_heros] //Spread syntax (...)
// console.log(newHeros);


const anotherArr = [0,1,2,3,4,[5,6],7,4,[2,3,4,[6,7,8,9],10,11],23]
const real_anotherArr = anotherArr.flat(Infinity) //Returns a new array with all sub-array elements

console.log(real_anotherArr);


console.log(Array.isArray("Ritesh"))
console.log(Array.from("Ritesh")) // Creates an array from an iterable object.


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from