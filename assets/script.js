let APIKey = 'b8a8e7dd16a33d470c7849ca148ec3f4';
let cityEl = document.querySelector('.weather');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + cityEl.value + "&appid=" +"b8a8e7dd16a33d470c7849ca148ec3f4")
        .then(response => response.json())
        .then(data => console.log(data))
});

let nameEl = document.querySelector('.name');
let descriptionEl = document.querySelector('.desc')
let tempEl = document.querySelector('.temp')

