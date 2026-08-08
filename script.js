const input= document.querySelector("#cityInput");
const weatherDiv= document.querySelector("#weatherInfo");
const button = document.querySelector("#searchBtn");
const errorDiv = document.querySelector("#errormess");
const loading = document.querySelector('#loading');

function searchweather(city){
    if(!city){
        weatherDiv.innerHTML = "\n\nPlease enter a city name";
        // alert("Please enter a city name");
        return;
    }
    getWeatherInfo(city);
}

button.addEventListener("click", ()=>{
    const city= input.value.trim();
    searchweather(city);
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const city = input.value.trim();
        searchweather(city);
    }
});

async function getWeatherInfo(city){
    try{
        const apiKey="579e179a4011c44627fdb57cdd9c70dc";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;    
        loading.innerHTML = "<h2>Loading...</h2>";
        const response = await fetch(url);
        if (!response.ok) {
            errorDiv.innerHTML = "\n\nCity not found";
            loading.innerHTML="";
            return; 
        }
        const data = await response.json();
        loading.innerHTML = "";
        weatherDiv.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>☁ Weather: ${data.weather[0].main}</p>
            <p>🌬 Wind: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        errorDiv.innerHTML = "\n<h2>Error fetching weather data</h2>";
    }
}