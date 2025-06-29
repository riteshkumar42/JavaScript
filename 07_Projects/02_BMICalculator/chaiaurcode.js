const form = document.querySelector('form')
// const body = document.querySelector('body')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    //parsrInt :-  Converts a string to an integer.
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const result_guide = document.querySelector('#result-guide');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a vaild height: ${height}`
        results.style.color = 'red'

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a vaild weight: ${weight}`
        results.style.color = 'red'


    } else {
        const bmi = weight / ((height * height) / 10000).toFixed(2);
        // show the results
        results.innerHTML = `<span>${bmi}</span>`

        if (bmi <= 18.6) {
            result_guide.innerHTML = `Under Weight = Less than 18.6`
            result_guide.style.color = "#ca3f3f"

        } else if (bmi > 18.7 && bmi < 24.9) {
            result_guide.innerHTML = `Normal Range = 18.6 and 24.9`
            result_guide.style.color = 'green'

        } else {
            result_guide.innerHTML = `Overweight = Greater than 24.9`
            result_guide.style.color = '#c3bc2b'

        }

    }

})