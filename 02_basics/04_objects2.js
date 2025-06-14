// const User = new Object() // singleton objects
const User = {}   // non-singleton objects 

User.id = '123asd'
User.name = 'Sunny'
User.isLoggedIn = true
User.email = "sunny@gmail.com"

// console.log(User);

const userOne = {
    fullname: {
        firstName: "Ritesh",
        lastName: "Kumar"
    },
    rollNo: {
        universityrollno: "21BS62689",
        classrollno: 39
    }
}

// console.log(userOne.fullname.firstName);
// console.log(userOne.rollNo.classrollno);


const Obj1 = { 1: "a", 2: "b" }
const Obj2 = { 3: "a", 4: "b" }
const Obj3 = { 5: "a", 6: "b" }

// const allObj = { Obj1, Obj2 } // Not use
// const allObj = Object.assign({}, Obj1, Obj2, Obj3)

const allObj = { ...Obj1, ...Obj2, ...Obj3 } // spread syntax (...)
// console.log(allObj);


// console.log(Object.keys(User));  // output datatype Array
// console.log(Object.values(User));  // output datatype Array
// console.log(Object.entries(User));

//*=====================================================

// Objects De-structure

const course = {
    coursename: "JavaScript",
    price: "Free",
    courseTeacher: "Hitesh Choudhary"
}

// console.log(course.courseTeacher) 

const {courseTeacher: teacher} = course // de-structure
// console.log(courseTeacher);
console.log(teacher);

