const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumber = myNums.filter((nums) => nums > 6)  //* Implicit return
// console.log(newNumber);

const newNumber = myNums.filter((nums) => {
    return nums > 6
})
// console.log(newNumber);

// dono same hain filter() and foreach() loops

let pushNums = []
myNums.forEach((num) => {
    if (num > 7) {
        pushNums.push(num)  // New elements to add to the array.
    }
})
// console.log(pushNums);


const myBooks = [
    {
        title: "Sapiens: A Brief History of Humankind",
        genre: "History",
        publishYear: 2011,
        edition: "3rd"
    },
    {
        title: "Guns, Germs, and Steel",
        genre: "History",
        publishYear: 1997,
        edition: "Revised Edition"
    },
    {
        title: "A Brief History of Time",
        genre: "Science Fiction",
        publishYear: 1988,
        edition: "Updated and Expanded"
    },
    {
        title: "Dune",
        genre: "Science Fiction",
        publishYear: 1965,
        edition: "Collector's Edition"
    },
    {
        title: "Neuromancer",
        genre: "Science Fiction",
        publishYear: 1984,
        edition: "1st"
    },
    {
        title: "Clean Code",
        genre: "Programming",
        publishYear: 2008,
        edition: "1st"
    },
    {
        title: "You Don't Know JS",
        genre: "Programming",
        publishYear: 2015,
        edition: "2nd"
    },
    {
        title: "The Pragmatic Programmer",
        genre: "Programming",
        publishYear: 1999,
        edition: "20th Anniversary"
    },
    {
        title: "The Martian",
        genre: "Science Fiction",
        publishYear: 2011,
        edition: "1st"
    },
    {
        title: "The History of the Ancient World",
        genre: "History",
        publishYear: 2007,
        edition: "1st"
    }
];

let userBooks = myBooks.filter((book) => book.genre === "History")

userBooks = myBooks.filter((book) => {
    return book.publishYear >= 2003 && book.genre === "Programming"
})

console.log(userBooks);

