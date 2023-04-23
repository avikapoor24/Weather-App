const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '53aaf81232msh377624d3b3e6134p145931jsn90b446a95ec5',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result); ̰
// } catch (error) {
// 	console.error(error);
// }
const getWeather = (city) => {
    cityName.innerHTML= city 
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
        .then(response => response.json())
        .then((response) => {

            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed


            console.log(response)
        }
        )
        .catch(err => console.error(err));
}

submit.addEventListener("click", () => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")