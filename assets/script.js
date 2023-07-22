let APIKey = 'b8a8e7dd16a33d470c7849ca148ec3f4';
let today = dayjs();
console.log(today.format('YYYY-MM-DD'))

let cityEl = document.querySelector('.weather');
cityEl.value = 'maine'
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + cityEl.value + "&appid=" + "b8a8e7dd16a33d470c7849ca148ec3f4")
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log('Fetch Response \n-------------');
            console.log(data);

            let nameEl = document.querySelector('.name');
            nameEl.textContent = 'City: ' + data.city.name

            let tempEl = document.querySelector('.temp');

            tempEl.textContent = 'Temperature: ' + Math.round((data.list[0].main.temp - 273.15) * (9 / 5) + (32)) + '°F'

            let descriptionEl = document.querySelector('.humid');
            descriptionEl.textContent = 'Humidity: ' + data.list[0].main.humidity + '%'

            let windEl = document.querySelector('.wind');
            windEl.textContent = 'Wind Speed: ' + data.list[0].wind.speed + ' MPH'

            for (let i = 0; i < 40; i++) {
                if (data.list[i].dt_txt.includes("12:00:00") == true) {

                    console.log(data.list[i].dt_txt)
                    // let hour = data.list[i].dt_txt
                    // let temperature = data.list[i].main.temp



                }

            }

        })
});