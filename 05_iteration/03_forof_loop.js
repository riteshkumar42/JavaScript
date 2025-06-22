// The for...of loop in JavaScript provides a concise way to iterate over the values of iterable objects.
// iterate : Arrays ,Strings, Maps, Sets, NodeLists(in a browser environment)

let arr = [3, 2, 54, 23, 2345, 2134, 5, 43, "hello!"]

// pass array value
for (const element of arr) {
    // console.log(element);
}


const welcomeMessage = "Hello World!"

for (const wel of welcomeMessage) {
    // console.log(wel);

}

//map.set :- Adds a new element with a specified key and value to the Map.
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('IN', 'India')
map.set('FR', 'France')

// console.log(map);

for (const [key, value] of map) {       //[key, val] :- de-structue of array
    console.log(key, ':', value);
}