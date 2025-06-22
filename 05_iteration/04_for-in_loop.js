// for-In loops for Object

const myObject = {
    game1: 'BGMI',
    game2: 'Spiderman',
    game3: 'Candy Crush Saga',
}

for (const key in myObject) {
    //  console.log(key, ':-', myObject[key]);

}

const myArr = ['js', 'cpp', 'rb', 'py', 'java'] 

// by defult pass array key not value
for (const key in myArr) {
    console.log(key,':', myArr[key]);
        
}