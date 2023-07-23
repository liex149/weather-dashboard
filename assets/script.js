let APIKey = 'b8a8e7dd16a33d470c7849ca148ec3f4';
let today = dayjs();
console.log(today.format('YYYY-MM-DD'))
let historyEl = document.querySelector('.history');
let cityEl = document.querySelector('.weather');
// cityEl.value = 'maine'
let button = document.querySelector('.button');

//The code within the click listener on line 13 contains code that: 
// -stores searched city in array (lines 15 - 234)
// -adds click listeners that fetch weather info when saved city is clicked (line 26 and line135)
// -fetches weather for city in input field when submit button is clicked (line 238)
button.addEventListener('click', function () {

    let SavedCity = JSON.parse(localStorage.getItem("saved"));
    //check if saved city array is null. If not, create a clickable saved city div
    //and store city array in local storage
    if (SavedCity !== null) {
        //check if city is already stored.
        if (!SavedCity.includes(cityEl.value)) {

            let divEl = document.createElement('div');
            historyEl.appendChild(divEl).textContent = cityEl.value
            divEl.setAttribute('id', cityEl.value)
            SavedCity.push(cityEl.value)
            localStorage.setItem('saved', JSON.stringify(SavedCity))
            divEl.addEventListener('click', function () {
                fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + divEl.id + "&appid=" + "b8a8e7dd16a33d470c7849ca148ec3f4")
                    .then(function (response) {
                        return response.json();
                    })

                    .then(function (data) {
                        console.log('Fetch Response \n-------------');
                        console.log(data);
                        // this is the weather for 'today'
                        let nameEl = document.querySelector('.name');
                        nameEl.textContent = 'City: ' + data.city.name
                        let tempEl = document.querySelector('.temp');
                        tempEl.textContent = 'Temperature: ' + Math.round((data.list[0].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                        let descriptionEl = document.querySelector('.humid');
                        descriptionEl.textContent = 'Humidity: ' + data.list[0].main.humidity + '%'
                        let windEl = document.querySelector('.wind');
                        windEl.textContent = 'Wind Speed: ' + data.list[0].wind.speed + ' MPH'
                        let imageEl = document.querySelector('.image');
                        imageEl.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png')


                        // first card
                        for (let i = 0; i < 40; i++) {
                            if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(1, 'day').format('YYYY-MM-DD')) == true) {
                                let image1El = document.querySelector('.image1');
                                image1El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                                let date1El = document.querySelector('.date1');
                                date1El.textContent = 'Date: ' + (today.add(1, 'day').format('YYYY-MM-DD'))
                                let humid1El = document.querySelector('.humid1');
                                humid1El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                                let temp1El = document.querySelector('.temp1');
                                temp1El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                                let wind1 = document.querySelector('.wind1');
                                wind1.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'

                            }
                        }
                        // second card
                        for (let i = 0; i < 40; i++) {
                            if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(2, 'day').format('YYYY-MM-DD')) == true) {
                                let image2El = document.querySelector('.image2');
                                image2El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                                let date2El = document.querySelector('.date2');
                                date2El.textContent = 'Date: ' + (today.add(2, 'day').format('YYYY-MM-DD'))
                                let humid2El = document.querySelector('.humid2');
                                humid2El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                                let temp2El = document.querySelector('.temp2');
                                temp2El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                                let wind2 = document.querySelector('.wind2');
                                wind2.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                            }
                        }
                        // third card
                        for (let i = 0; i < 40; i++) {
                            if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(3, 'day').format('YYYY-MM-DD')) == true) {
                                let image3El = document.querySelector('.image3');
                                image3El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                                let date3El = document.querySelector('.date3');
                                date3El.textContent = 'Date: ' + (today.add(3, 'day').format('YYYY-MM-DD'))
                                let humid3El = document.querySelector('.humid3');
                                humid3El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                                let temp3El = document.querySelector('.temp3');
                                temp3El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                                let wind3 = document.querySelector('.wind3');
                                wind3.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                            }
                        }
                        // fourth card
                        for (let i = 0; i < 40; i++) {
                            if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(4, 'day').format('YYYY-MM-DD')) == true) {
                                let image4El = document.querySelector('.image4');
                                image4El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                                let date4El = document.querySelector('.date4');
                                date4El.textContent = 'Date: ' + (today.add(4, 'day').format('YYYY-MM-DD'))
                                let humid4El = document.querySelector('.humid4');
                                humid4El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                                let temp4El = document.querySelector('.temp4');
                                temp4El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                                let wind4 = document.querySelector('.wind4');
                                wind4.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                            }
                        }
                        // fifth card
                        for (let i = 0; i < 40; i++) {
                            if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(5, 'day').format('YYYY-MM-DD')) == true) {
                                let image5El = document.querySelector('.image5');
                                image5El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                                let date5El = document.querySelector('.date5');
                                date5El.textContent = 'Date: ' + (today.add(5, 'day').format('YYYY-MM-DD'))
                                let humid5El = document.querySelector('.humid5');
                                humid5El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                                let temp5El = document.querySelector('.temp5');
                                temp5El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                                let wind5 = document.querySelector('.wind5');
                                wind5.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                            }
                        }

                    })
                    .catch(err => alert('You entered Wrong city name'))
            })
        };
        //If saved city array is null, create first element, and store in local storage and
        //create clickable saved city div
    } else {

        let divEl = document.createElement('div');
        historyEl.appendChild(divEl).textContent = cityEl.value
        divEl.setAttribute('id', cityEl.value)
        SavedCity = [cityEl.value];
        localStorage.setItem('saved', JSON.stringify(SavedCity));
        divEl.addEventListener('click', function () {
            fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + divEl.id + "&appid=" + "b8a8e7dd16a33d470c7849ca148ec3f4")
                .then(function (response) {
                    return response.json();
                })

                .then(function (data) {
                    console.log('Fetch Response \n-------------');
                    console.log(data);
                    // this is the weather for 'today'
                    let nameEl = document.querySelector('.name');
                    nameEl.textContent = 'City: ' + data.city.name
                    let tempEl = document.querySelector('.temp');
                    tempEl.textContent = 'Temperature: ' + Math.round((data.list[0].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                    let descriptionEl = document.querySelector('.humid');
                    descriptionEl.textContent = 'Humidity: ' + data.list[0].main.humidity + '%'
                    let windEl = document.querySelector('.wind');
                    windEl.textContent = 'Wind Speed: ' + data.list[0].wind.speed + ' MPH'
                    let imageEl = document.querySelector('.image');
                    imageEl.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png')


                    // first card
                    for (let i = 0; i < 40; i++) {
                        if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(1, 'day').format('YYYY-MM-DD')) == true) {
                            let image1El = document.querySelector('.image1');
                            image1El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                            let date1El = document.querySelector('.date1');
                            date1El.textContent = 'Date: ' + (today.add(1, 'day').format('YYYY-MM-DD'))
                            let humid1El = document.querySelector('.humid1');
                            humid1El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                            let temp1El = document.querySelector('.temp1');
                            temp1El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                            let wind1 = document.querySelector('.wind1');
                            wind1.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'

                        }
                    }
                    // second card
                    for (let i = 0; i < 40; i++) {
                        if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(2, 'day').format('YYYY-MM-DD')) == true) {
                            let image2El = document.querySelector('.image2');
                            image2El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                            let date2El = document.querySelector('.date2');
                            date2El.textContent = 'Date: ' + (today.add(2, 'day').format('YYYY-MM-DD'))
                            let humid2El = document.querySelector('.humid2');
                            humid2El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                            let temp2El = document.querySelector('.temp2');
                            temp2El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                            let wind2 = document.querySelector('.wind2');
                            wind2.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                        }
                    }
                    // third card
                    for (let i = 0; i < 40; i++) {
                        if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(3, 'day').format('YYYY-MM-DD')) == true) {
                            let image3El = document.querySelector('.image3');
                            image3El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                            let date3El = document.querySelector('.date3');
                            date3El.textContent = 'Date: ' + (today.add(3, 'day').format('YYYY-MM-DD'))
                            let humid3El = document.querySelector('.humid3');
                            humid3El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                            let temp3El = document.querySelector('.temp3');
                            temp3El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                            let wind3 = document.querySelector('.wind3');
                            wind3.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                        }
                    }
                    // fourth card
                    for (let i = 0; i < 40; i++) {
                        if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(4, 'day').format('YYYY-MM-DD')) == true) {
                            let image4El = document.querySelector('.image4');
                            image4El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                            let date4El = document.querySelector('.date4');
                            date4El.textContent = 'Date: ' + (today.add(4, 'day').format('YYYY-MM-DD'))
                            let humid4El = document.querySelector('.humid4');
                            humid4El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                            let temp4El = document.querySelector('.temp4');
                            temp4El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                            let wind4 = document.querySelector('.wind4');
                            wind4.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                        }
                    }
                    // fifth card
                    for (let i = 0; i < 40; i++) {
                        if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(5, 'day').format('YYYY-MM-DD')) == true) {
                            let image5El = document.querySelector('.image5');
                            image5El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                            let date5El = document.querySelector('.date5');
                            date5El.textContent = 'Date: ' + (today.add(5, 'day').format('YYYY-MM-DD'))
                            let humid5El = document.querySelector('.humid5');
                            humid5El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                            let temp5El = document.querySelector('.temp5');
                            temp5El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                            let wind5 = document.querySelector('.wind5');
                            wind5.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                        }
                    }

                })
                .catch(err => alert('You entered Wrong city name'))




        })

    }
    //fetch weather info for input city and populate page
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + cityEl.value + "&appid=" + "b8a8e7dd16a33d470c7849ca148ec3f4")
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log('Fetch Response \n-------------');
            console.log(data);
            // this is the weather for 'today'
            let nameEl = document.querySelector('.name');
            nameEl.textContent = 'City: ' + data.city.name
            let tempEl = document.querySelector('.temp');
            tempEl.textContent = 'Temperature: ' + Math.round((data.list[0].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
            let descriptionEl = document.querySelector('.humid');
            descriptionEl.textContent = 'Humidity: ' + data.list[0].main.humidity + '%'
            let windEl = document.querySelector('.wind');
            windEl.textContent = 'Wind Speed: ' + data.list[0].wind.speed + ' MPH'
            let imageEl = document.querySelector('.image');
            imageEl.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png')


            // first card
            for (let i = 0; i < 40; i++) {
                if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(1, 'day').format('YYYY-MM-DD')) == true) {
                    let image1El = document.querySelector('.image1');
                    image1El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                    let date1El = document.querySelector('.date1');
                    date1El.textContent = 'Date: ' + (today.add(1, 'day').format('YYYY-MM-DD'))
                    let humid1El = document.querySelector('.humid1');
                    humid1El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                    let temp1El = document.querySelector('.temp1');
                    temp1El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                    let wind1 = document.querySelector('.wind1');
                    wind1.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'

                }
            }
            // second card
            for (let i = 0; i < 40; i++) {
                if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(2, 'day').format('YYYY-MM-DD')) == true) {
                    let image2El = document.querySelector('.image2');
                    image2El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                    let date2El = document.querySelector('.date2');
                    date2El.textContent = 'Date: ' + (today.add(2, 'day').format('YYYY-MM-DD'))
                    let humid2El = document.querySelector('.humid2');
                    humid2El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                    let temp2El = document.querySelector('.temp2');
                    temp2El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                    let wind2 = document.querySelector('.wind2');
                    wind2.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                }
            }
            // third card
            for (let i = 0; i < 40; i++) {
                if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(3, 'day').format('YYYY-MM-DD')) == true) {
                    let image3El = document.querySelector('.image3');
                    image3El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                    let date3El = document.querySelector('.date3');
                    date3El.textContent = 'Date: ' + (today.add(3, 'day').format('YYYY-MM-DD'))
                    let humid3El = document.querySelector('.humid3');
                    humid3El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                    let temp3El = document.querySelector('.temp3');
                    temp3El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                    let wind3 = document.querySelector('.wind3');
                    wind3.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                }
            }
            // fourth card
            for (let i = 0; i < 40; i++) {
                if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(4, 'day').format('YYYY-MM-DD')) == true) {
                    let image4El = document.querySelector('.image4');
                    image4El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                    let date4El = document.querySelector('.date4');
                    date4El.textContent = 'Date: ' + (today.add(4, 'day').format('YYYY-MM-DD'))
                    let humid4El = document.querySelector('.humid4');
                    humid4El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                    let temp4El = document.querySelector('.temp4');
                    temp4El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                    let wind4 = document.querySelector('.wind4');
                    wind4.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                }
            }
            // fifth card
            for (let i = 0; i < 40; i++) {
                if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(5, 'day').format('YYYY-MM-DD')) == true) {
                    let image5El = document.querySelector('.image5');
                    image5El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                    let date5El = document.querySelector('.date5');
                    date5El.textContent = 'Date: ' + (today.add(5, 'day').format('YYYY-MM-DD'))
                    let humid5El = document.querySelector('.humid5');
                    humid5El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                    let temp5El = document.querySelector('.temp5');
                    temp5El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                    let wind5 = document.querySelector('.wind5');
                    wind5.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                }
            }
        })
        .catch(function (error) {
            document.querySelector('#' + cityEl.value).remove();
            SavedCity = JSON.parse(localStorage.getItem('saved'));
            SavedCity.pop();
            localStorage.setItem('saved', JSON.stringify(SavedCity));
            alert('Not a city. Please make sure spelling is correct.')
        })

});



function render() {
    let SavedCity = JSON.parse(localStorage.getItem('saved'))

    for (let i = 0; i < SavedCity.length; i++) {
        let divEl = document.createElement('div');
        historyEl.appendChild(divEl).textContent = SavedCity[i]
        divEl.setAttribute('id', SavedCity[i])
        divEl.addEventListener('click', function () {
            fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + divEl.id + "&appid=" + "b8a8e7dd16a33d470c7849ca148ec3f4")
                .then(function (response) {
                    return response.json();
                })

                .then(function (data) {
                    console.log('Fetch Response \n-------------');
                    console.log(data);
                    // this is the weather for 'today'
                    let nameEl = document.querySelector('.name');
                    nameEl.textContent = 'City: ' + data.city.name
                    let tempEl = document.querySelector('.temp');
                    tempEl.textContent = 'Temperature: ' + Math.round((data.list[0].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                    let descriptionEl = document.querySelector('.humid');
                    descriptionEl.textContent = 'Humidity: ' + data.list[0].main.humidity + '%'
                    let windEl = document.querySelector('.wind');
                    windEl.textContent = 'Wind Speed: ' + data.list[0].wind.speed + ' MPH'
                    let imageEl = document.querySelector('.image');
                    imageEl.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png')


                    // first card
                    for (let i = 0; i < 40; i++) {
                        if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(1, 'day').format('YYYY-MM-DD')) == true) {
                            let image1El = document.querySelector('.image1');
                            image1El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                            let date1El = document.querySelector('.date1');
                            date1El.textContent = 'Date: ' + (today.add(1, 'day').format('YYYY-MM-DD'))
                            let humid1El = document.querySelector('.humid1');
                            humid1El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                            let temp1El = document.querySelector('.temp1');
                            temp1El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                            let wind1 = document.querySelector('.wind1');
                            wind1.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'

                        }
                    }
                    // second card
                    for (let i = 0; i < 40; i++) {
                        if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(2, 'day').format('YYYY-MM-DD')) == true) {
                            let image2El = document.querySelector('.image2');
                            image2El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                            let date2El = document.querySelector('.date2');
                            date2El.textContent = 'Date: ' + (today.add(2, 'day').format('YYYY-MM-DD'))
                            let humid2El = document.querySelector('.humid2');
                            humid2El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                            let temp2El = document.querySelector('.temp2');
                            temp2El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                            let wind2 = document.querySelector('.wind2');
                            wind2.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                        }
                    }
                    // third card
                    for (let i = 0; i < 40; i++) {
                        if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(3, 'day').format('YYYY-MM-DD')) == true) {
                            let image3El = document.querySelector('.image3');
                            image3El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                            let date3El = document.querySelector('.date3');
                            date3El.textContent = 'Date: ' + (today.add(3, 'day').format('YYYY-MM-DD'))
                            let humid3El = document.querySelector('.humid3');
                            humid3El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                            let temp3El = document.querySelector('.temp3');
                            temp3El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                            let wind3 = document.querySelector('.wind3');
                            wind3.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                        }
                    }
                    // fourth card
                    for (let i = 0; i < 40; i++) {
                        if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(4, 'day').format('YYYY-MM-DD')) == true) {
                            let image4El = document.querySelector('.image4');
                            image4El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                            let date4El = document.querySelector('.date4');
                            date4El.textContent = 'Date: ' + (today.add(4, 'day').format('YYYY-MM-DD'))
                            let humid4El = document.querySelector('.humid4');
                            humid4El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                            let temp4El = document.querySelector('.temp4');
                            temp4El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                            let wind4 = document.querySelector('.wind4');
                            wind4.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                        }
                    }
                    // fifth card
                    for (let i = 0; i < 40; i++) {
                        if (data.list[i].dt_txt.includes("12:00:00") == true && data.list[i].dt_txt.includes(today.add(5, 'day').format('YYYY-MM-DD')) == true) {
                            let image5El = document.querySelector('.image5');
                            image5El.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png')
                            let date5El = document.querySelector('.date5');
                            date5El.textContent = 'Date: ' + (today.add(5, 'day').format('YYYY-MM-DD'))
                            let humid5El = document.querySelector('.humid5');
                            humid5El.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
                            let temp5El = document.querySelector('.temp5');
                            temp5El.textContent = 'Temperature: ' + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + (32)) + '°F'
                            let wind5 = document.querySelector('.wind5');
                            wind5.textContent = 'Wind Speed: ' + data.list[i].wind.speed + ' MPH'
                        }
                    }

                })
        })

    }

}
render();