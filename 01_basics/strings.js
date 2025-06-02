const name = "Ritesh";
const repoCount = 20;

// console.log(name + " " + repoCount);

console.log(`My name is ${name.toUpperCase()} and my repo count is ${repoCount}`);


const gameName = new String("Battlegrounds Mobile India");

// console.log(gameName);
// console.log(gameName.length);
// console.log(gameName[3]);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(21));

const newString = gameName.substring(0,13);
// console.log(newString);


const anotherString = "    bgmi@google.com  ";
// console.log(anotherString);
// console.log(anotherString.trim()); // removes whitespace from both ends


console.log(gameName.split(" "));// splits the string into an array based on the delimiter
