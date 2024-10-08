function fetchWeather() {
    const city = 'Odesa'; 
    const apiKey = 'ffc6cee30067403ec5aa638f1bc7802e'; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
          
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            document.getElementById('city').textContent = `City: ${data.name}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-widget').innerHTML = 'Error loading weather data.';
        });

        const refreshButton = document.getElementById('refresh-btn');
        refreshButton.addEventListener('click', fetchWeather);
}


fetchWeather();
