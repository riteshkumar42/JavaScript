// while loops

let index = 0
while (index <= 10) {
    // console.log(`Value of index is : ${index}`);
    index = index + 2
}


let myArray = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", "Spider-Man", "Doctor Strange", "Black Panther", "Ant-Man", "Wasp", "Scarlet Witch", "Vision", "Falcon", "Winter Soldier", "Captain Marvel", "Star-Lord", "Gamora", "Drax", "Rocket Raccoon", "Groot", "Mantis", "Nebula", "War Machine", "Loki", "Valkyrie", "Shuri", "Okoye", "M'Baku", "Kate Bishop", "Yelena Belova", "Moon Knight", "She-Hulk", "Ms. Marvel", "America Chavez", "Shang-Chi",]
let i = 0
let num = 1
while (i < myArray.length) {

    while (num <= i) {
        num = num + 1
    }

    // console.log(`superHero are ${num} : ${myArray[i]}`);
    i = i + 1

}

// do - while loops
let score = 134
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);