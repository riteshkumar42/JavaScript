//* syntex
// array.forEach(element => {

// });

const coding = ['JS', "python", "c++", "java", "ruby", "C"]

coding.forEach(function (values) {
    // console.log(values);

})

coding.forEach((item) => {
    // console.log(item);
})

function printMe(val) {
    console.log(val);
}

// coding.forEach(printMe); //pass only reference 


coding.forEach((item, index, array) => {
    // console.log(item, index, array);
})


const myCoding = [
    {
        languageName: "JavaScript",
        languageExtension: "js"
    },
    {
        languageName: "Python",
        languageExtension: "py"
    },
    {
        languageName: "Java",
        languageExtension: "java"
    },
    {
        languageName: "C++",
        languageExtension: "cpp"
    },
    {
        languageName: "Ruby",
        languageExtension: "rb"
    }
]

myCoding.forEach((val, indexNum) => {
    console.log(indexNum, val.languageName.toUpperCase());

})