import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function SearchEngine() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);

  function displayWeather(response) {
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = response.data.wind.speed;
    let iconUrl = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    setWeather(
      <ul className="SearchEngine">
        <li>Temperature: {temperature}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind}km/hr</li>
        <li>
          <img src={iconUrl} alt={description} />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "e450bc345a80a08ada69fd5c714d871d";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h3>{weather}</h3>
    </div>
  );
}
