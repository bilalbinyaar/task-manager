import React, { useState, useEffect } from "react";
import './Components.css';


const apiKey = {
    key: 'dc080f20766debbdcc3ca00bda3720fd',
    base: 'https://api.openweathermap.org/data/2.5/'
}

const Weather = () => {
  const [temperatureC, setTemperatureC] = useState(undefined);
  const [city, setCity] = useState(undefined);
  const [country, setCountry] = useState(undefined);

  useEffect(() => {
    if (navigator.geolocation) {
      getPosition().then((position) => {
          getWeather(position.coords.latitude, position.coords.longitude);
        })
    } else {
      alert("Geolocation not available");
    }
  }, []);

  const getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  const getWeather = async (lat, lon) => {
    try {
      const api_call = await fetch(
        `${apiKey.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKey.key}`
      );
      const data = await api_call.json();
      setCity(data.name);
      setTemperatureC(Math.round(data.main.temp));
      setCountry(data.sys.country);
    } catch (error) {
      return null
    }
  };

  if (temperatureC) {
    return (
      <div>
        <div className="city">
            <div className="title">
                <h3>{city}, {country}</h3>
            </div>
            <div className="temperature">
                <p>
                {temperatureC}°<span>C</span>
                </p>
            </div>
        </div>
      </div>
    );
  } else {
    return (
        <h5>
          Calculating Real time weather.
        </h5>
    );
  }
};

export default Weather;
