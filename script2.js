const url2 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options2 = {
    method: 'GET',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '53aaf81232msh377624d3b3e6134p145931jsn90b446a95ec5',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather2 = (city2) => {
    city_Name.innerHTML= city2 
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city2, options)
        .then(response => response.json())
        .then((response) => {

            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed


            console.log(response)
        }
        )
        .catch(err => console.error(err));
}

getWeather2("Shanghai")
cloud_pctS.innerHTML = response.cloud_pct
feels_likeS.innerHTML = response.feels_like
humidityS.innerHTML = response.humidity
humidity2S.innerHTML = response.humidity
max_tempS.innerHTML = response.max_temp
min_tempS.innerHTML = response.min_temp
sunriseS.innerHTML = response.sunrise
sunsetS.innerHTML = response.sunset
tempS.innerHTML = response.temp
temp2S.innerHTML = response.temp
wind_degreesS.innerHTML = response.wind_degrees
wind_speedS.innerHTML = response.wind_speed
wind_speed2S.innerHTML = response.wind_speed

getWeather2("Boston")
cloud_pctB.innerHTML = response.cloud_pct
feels_likeB.innerHTML = response.feels_like
humidityB.innerHTML = response.humidity
humidity2B.innerHTML = response.humidity
max_tempB.innerHTML = response.max_temp
min_tempB.innerHTML = response.min_temp
sunriseB.innerHTML = response.sunrise
sunsetB.innerHTML = response.sunset
tempB.innerHTML = response.temp
temp2B.innerHTML = response.temp
wind_degreesB.innerHTML = response.wind_degrees
wind_speedB.innerHTML = response.wind_speed
wind_speed2B.innerHTML = response.wind_speed