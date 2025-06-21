// for loops

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 6) {
        // console.log(`${element} Your number`);
    }

    // console.log(element);
}



for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loops is ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loops is ${j} and Outer loops is ${i}`);  
        // console.log(i + '*' + j + '=' + i * j);

    }
}

const myArray = ['ironman', 'hulk', 'spiderman', 'thor']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);

}


// ++++++ break and continue +++++++

// for (let index = 1; index <= 15; index++) {
//     if (index == 6) {
//         console.log('Detected number 6');
//         break;
//     }
//     const element = index;
//     console.log(`Value of index is ${element}`);
// }

for (let index = 1; index <= 15; index++) {
    if (index == 6) {
        console.log('Detected number 6');
        continue;
    }
    const element = index;
    console.log(`Value of index is ${element}`);
}