// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector('body')

// buttons.forEach(function (button) {
//     button.addEventListener('click', function (e) {
//         if (e.target.id === 'grey') {
//             body.style.backgroundColor = e.target.id
//         }
//         if (e.target.id === 'white') {
//             body.style.backgroundColor = e.target.id
//             body.style.color = "black"
//         }
//         if (e.target.id === 'blue') {
//             body.style.backgroundColor = e.target.id
//         }
//         if (e.target.id === 'yellow') {
//             body.style.backgroundColor = e.target.id
//         }
//     })
// });


const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const idEvent = e.target.id
        switch (idEvent) {
            case "grey":
                body.style.backgroundColor = "grey"
                body.style.color = "white"
                break;

            case "white":
                body.style.backgroundColor = "white"
                body.style.color = "black"
                break;

            case "blue":
                body.style.backgroundColor = "blue"
                body.style.color = "yellow"
                break;

            case "yellow":
                body.style.backgroundColor = "yellow"
                body.style.color = "blue"
                break;

            default:
                console.log("Back to learn");
                
                break;
        }


    })


})
