const input= document.querySelector("#cityInput");

const weatherDiv= document.querySelector("#weatherInfo");
const button = document.querySelector("#searchBtn");

button.addEventListener("click", ()=>{
    const city= input.value;
    getWeatherInfo(city);
});

async function getWeatherInfo(city){
    const apiKey="579e179a4011c44627fdb57cdd9c70dc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("City not found");
    }
    const data = await response.json();
    
    weatherDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡 Temperature: ${data.main.temp} °C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>☁ Weather: ${data.weather[0].main}</p>
        <p>🌬 Wind: ${data.wind.speed} m/s</p>
    `;
}