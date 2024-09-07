// script.js
document.getElementById('search-button').addEventListener('click', function () {
    const city = document.getElementById('city-input').value;
    const apiKey = '638772361bf6021d27fbab3b6a56711c'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('temperature').textContent = `${data.main.temp}°C`;
                document.getElementById('humidity').innerHTML = `<span>💧 ${data.main.humidity}%</span>`;
                document.getElementById('wind-speed').innerHTML = `<span>🌬️ ${data.wind.speed} km/h</span>`;

                // Update the weather icon based on the weather condition
                const weatherIcon = document.getElementById('weather-icon');
                const weatherCondition = data.weather[0].main.toLowerCase();
                switch (weatherCondition) {
                    case 'clear':
                        weatherIcon.textContent = '☀️';
                        break;
                    case 'clouds':
                        weatherIcon.textContent = '☁️';
                        break;
                    case 'rain':
                        weatherIcon.textContent = '🌧️';
                        break;
                    case 'snow':
                        weatherIcon.textContent = '❄️';
                        break;
                    // Add more cases for different weather conditions
                    default:
                        weatherIcon.textContent = '🌈';
                }
            } else {
                alert('City not found, please try again.');
            }
        })
        .catch(error => {
            alert('Error fetching the weather data, please try again.');
            console.error('Error fetching the weather data:', error);
        });
});
