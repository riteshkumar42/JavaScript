const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const body = document.querySelector('body');
let intervalID;
let randomColor;

// generate a random color
randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;

};

// function randomColor() {
//     return Math.floor(Math.random() * 255);
// }
// const changeColor = function () {
//     body.style.backgroundColor = `rgb(${randomColor(255)} ${randomColor(255)} ${randomColor(255)})`;
// }


startButton.addEventListener('click', function () {
    if (!intervalID) {
        console.log("start");
        intervalID = setInterval(changeColor, 1000);
    }
    function changeColor() {
        document.body.style.backgroundColor = randomColor();
        console.log(randomColor());
    }
})

stopButton.addEventListener('click', function () {
    clearInterval(intervalID);
    intervalID = null;
})
