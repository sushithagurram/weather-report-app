import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "2b303b4be327ac62c3dc665a67e56c80";

  const getWeather = async () => {
    if (city === "") return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await axios.get(url);

    setWeather(response.data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div>

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>
        Search
      </button>

      {weather && (
        <div style={{ marginTop: "20px" }}>

          <h2>{weather.name}</h2>

          <p>Temperature: {weather.main.temp} °C</p>

          <p>Humidity: {weather.main.humidity}%</p>

          <p>Weather: {weather.weather[0].description}</p>

          <p>Wind Speed: {weather.wind.speed} m/s</p>

        </div>
      )}

    </div>
  );
}

export default Weather;